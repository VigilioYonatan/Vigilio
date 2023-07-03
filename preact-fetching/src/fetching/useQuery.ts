import { delayFetch, timer } from "./helpers";
import { useEffect, useState } from "preact/hooks";
export interface OptionsQuery<Data, Error> {
    skipFetching?: boolean;
    placeholderData?: Data | null;
    staleTime?: number | null;
    refetchIntervalInBackground?: boolean;
    refetchOnReconnect?: boolean;
    delay?: number | null;
    transformData?: ((data: Data) => Data) | null;
    onError?: ((error: Error) => void) | null;
    onSuccess?: ((data: Data) => void) | null;
    clean?: boolean;
}
export type UseQuery<Data, Error> = {
    [K in keyof FetchPropsProps<Data, Error>]: FetchPropsProps<Data, Error>[K];
} & {
    refetch: (clean?: boolean) => void;
};

export type FetchPropsProps<Data, Error> = {
    data: Data | null;
    isLoading: boolean | null;
    isSuccess: boolean | null;
    isFetching: boolean | null;
    isSkip: boolean;
    isError: boolean | null;
    error: Error | null;
};
function useQuery<Data, Error>(
    url: string,
    fetching: (url: string) => Promise<Data>,
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
        clean: true,
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
        clean,
        transformData,
        onError,
        onSuccess,
    } = opciones;
    const [fetchProps, setFetchProps] = useState<FetchPropsProps<Data, Error>>({
        data: placeholderData,
        isLoading: null,
        isSuccess: null,
        isFetching: null,
        isSkip: skipFetching,
        isError: null,
        error: null,
    });

    async function fetchEndpoint() {
        if (fetchProps.isFetching === false) {
            setFetchProps({ ...fetchProps, isFetching: true });
        } else {
            setFetchProps({ ...fetchProps, isLoading: true });
        }

        if (delay) {
            await delayFetch(timer(delay));
        }

        try {
            const data = await fetching(url);
            let transform: Data = data;
            if (transformData) {
                transform = transformData(data);
            }
            if (onSuccess) {
                onSuccess(transform);
            }
            setFetchProps({
                ...fetchProps,
                isLoading: false,
                isFetching: false,
                isSuccess: true,
                isError: false,
                data: transform,
            });
        } catch (error: unknown) {
            setFetchProps({
                ...fetchProps,
                isError: true,
                isLoading: false,
                isFetching: false,
                isSuccess: false,
                error: error as Error,
            });
            if (onError) {
                onError(error as Error);
            }
        }
    }

    useEffect(() => {
        if (fetchProps.isSkip) return;
        if (!staleTime) {
            fetchEndpoint();
            return;
        }
        if (fetchProps.isLoading || fetchProps.isFetching) return;
        fetchEndpoint();
        const interval = setInterval(() => {
            refetch(clean);
        }, timer(staleTime));
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!refetchIntervalInBackground) return;

        const evt = () => {
            if (
                document.visibilityState === "visible" &&
                refetchIntervalInBackground
            ) {
                refetch(clean);
            }
        };
        document.addEventListener("visibilitychange", evt);
    }, []);

    useEffect(() => {
        if (!refetchOnReconnect) return;
        window.addEventListener("online", () => {
            refetch(clean);
        });
    }, []);

    function restart() {
        setFetchProps({
            ...fetchProps,
            isSuccess: null,
            isError: null,
            data: placeholderData,
            error: null,
        });
    }
    function refetch(clean = true) {
        if (clean) {
            restart();
        }

        fetchEndpoint();
    }

    return { ...fetchProps, refetch };
}
export default useQuery;
