import { useEffect, useRef } from "preact/hooks";
import { cache, delayFetch, memory, timer } from "./helpers";
import { useSignal } from "@preact/signals";
export interface OptionsQuery<Data, Error> {
    skipFetching?: boolean;
    placeholderData?: Data | null;
    staleTime?: number | null;
    refetchIntervalInBackground?: boolean;
    refetchOnReconnect?: boolean;
    delay?: number | null;
    retry?: number | null;
    retryDelay?: number | null;
    transformData?: ((data: Data) => Data) | null;
    onError?: ((error: Error) => void) | null;
    onSuccess?: ((data: Data) => void) | null;
    clean?: boolean;
    isCaching?: boolean | number | null;
    isMemory?: boolean | number | null;
}
export type UseQuery<Data, Error> = {
    [K in keyof FetchPropsProps<Data, Error>]: FetchPropsProps<Data, Error>[K];
} & {
    refetch: (clean?: boolean) => Promise<void>;
    transformData: (cb: (data: Data) => Data) => void;
    cancel: () => void;
};

type FetchPropsProps<Data, Error> = {
    data: Data | null;
    isLoading: boolean | null;
    isSuccess: boolean | null;
    isFetching: boolean | null;
    isSkip: boolean;
    isError: boolean | null;
    error: Error | null;
    errorTimes: number;
};
function useQuery<Data, Error>(
    url: string,
    fetching: (url: string, signal: AbortSignal) => Promise<Data>,
    options: OptionsQuery<Data, Error> | null = null
): UseQuery<Data, Error> {
    let opciones: Required<OptionsQuery<Data, Error>> = {
        skipFetching: false,
        placeholderData: null,
        transformData: null,
        staleTime: null,
        refetchIntervalInBackground: false,
        onError: null,
        onSuccess: null,
        refetchOnReconnect: false,
        delay: null,
        retry: 3,
        retryDelay: null,
        clean: true,
        isCaching: null,
        isMemory: null,
    };

    if (options) {
        opciones = { ...opciones, ...options };
    }
    const {
        skipFetching,
        placeholderData,
        staleTime,
        refetchIntervalInBackground,
        refetchOnReconnect,
        delay,
        retry,
        retryDelay,
        clean,
        transformData,
        onError,
        onSuccess,
        isCaching,
        isMemory,
    } = opciones;
    const fetchProps = useSignal<FetchPropsProps<Data, Error>>({
        data: placeholderData,
        isLoading: null,
        isSuccess: null,
        isFetching: null,
        isSkip: skipFetching,
        isError: null,
        error: null,
        errorTimes: 0,
    });
    const controllerRef = useRef<AbortController | null>(null);

    async function fetchEndpoint(signal: AbortSignal) {
        if (fetchProps.value.isFetching === false) {
            fetchProps.value = {
                ...fetchProps.value,
                isFetching: true,
            };
            fetchProps.value.isFetching = true;
        } else {
            fetchProps.value = {
                ...fetchProps.value,
                isLoading: true,
            };
        }

        if (delay) {
            await delayFetch(timer(delay));
        }
        if (fetchProps.value.errorTimes !== 0) {
            await delayFetch(timer(retryDelay ?? 3));
        }

        try {
            const cche = isMemory ? memory.get(url) : cache.get(url);
            if (cche) {
                let transform: Data = cche;
                if (transformData) {
                    transform = transformData(transform);
                }
                if (onSuccess) {
                    onSuccess(transform);
                }
                fetchProps.value = {
                    ...fetchProps.value,
                    isLoading: false,
                    isFetching: false,
                    isSuccess: true,
                    isError: false,
                    data: transform,
                };
                return;
            }
            const data = await fetching(url, signal);
            let transform: Data = data;
            if (transformData) {
                transform = transformData(data);
            }
            if (onSuccess) {
                onSuccess(transform);
            }
            if (isCaching) {
                cache.set(
                    url,
                    transform,
                    typeof isCaching === "number" ? isCaching : null
                );
            }
            if (isMemory) {
                memory.set(
                    url,
                    transform,
                    typeof isMemory === "number" ? isMemory : null
                );
            }
            fetchProps.value = {
                ...fetchProps.value,
                isLoading: false,
                isFetching: false,
                isSuccess: true,
                isError: false,
                data: transform,
            };
        } catch (error: unknown) {
            fetchProps.value = {
                ...fetchProps.value,
                errorTimes: fetchProps.value.errorTimes + 1,
            };
            if (retry && fetchProps.value.errorTimes < retry) {
                await fetchEndpoint(signal);
                return;
            }
            fetchProps.value = {
                ...fetchProps.value,
                isError: true,
                isLoading: false,
                isFetching: false,
                isSuccess: false,
                error: error as Error,
            };

            if (onError) {
                onError(error as Error);
            }
        }
    }

    function execute() {
        // Cancelar request anterior si existe
        if (controllerRef.current) {
            controllerRef.current.abort();
        }

        // Crear nuevo controller
        controllerRef.current = new AbortController();

        return fetchEndpoint(controllerRef.current.signal);
    }
    function cancel() {
        if (controllerRef.current) {
            controllerRef.current.abort();
            controllerRef.current = null;
        }
    }
    useEffect(() => {
        return () => {
            if (controllerRef.current) {
                controllerRef.current.abort();
            }
        };
    }, []);
    async function initialFetching() {
        if (fetchProps.value.isSkip) return;
        if (!staleTime) {
            await execute();
            return;
        }
        await execute();
        const interval = setInterval(async () => {
            await refetch(clean);
        }, timer(staleTime));
        return () => clearInterval(interval);
    }

    useEffect(() => {
        initialFetching();
    }, []);

    useEffect(() => {
        let mounted = true; // Variable para verificar si el componente está montado
        if (
            !refetchIntervalInBackground &&
            fetchProps.value.isLoading &&
            fetchProps.value.isFetching
        )
            return;

        async function evt() {
            if (
                mounted &&
                document.visibilityState === "visible" &&
                refetchIntervalInBackground
            ) {
                await refetch(clean);
            }
        }
        document.addEventListener("visibilitychange", evt);
        // Devuelve una función de limpieza para eliminar el evento cuando el componente se desmonta
        return () => {
            mounted = false;
            document.removeEventListener("visibilitychange", evt);
        };
    }, [refetch]);

    useEffect(() => {
        let mounted = true;
        if (
            !refetchOnReconnect &&
            fetchProps.value.isLoading &&
            fetchProps.value.isFetching
        )
            return;
        async function evt() {
            if (mounted) {
                await refetch(clean);
            }
        }
        document.addEventListener("online", evt);
        return () => {
            mounted = false;
            document.removeEventListener("online", evt);
        };
    }, [refetch]);

    function restart() {
        fetchProps.value = {
            ...fetchProps.value,
            isSuccess: null,
            isError: null,
            data: placeholderData,
            error: null,
        };
    }

    async function refetch(clean = true) {
        if (fetchProps.value.isLoading || fetchProps.value.isFetching) return;
        if (clean) {
            if (isMemory) {
                memory.delete(url);
            }
            if (isCaching) {
                cache.delete(url);
            }
            restart();
        }
        return await execute();
    }

    function transform(cb: (data: Data) => Data) {
        const data = cb(fetchProps.value.data!);
        fetchProps.value = {
            ...fetchProps.value,
            data,
        };
    }

    return { ...fetchProps.value, transformData: transform, refetch, cancel };
}
export default useQuery;
