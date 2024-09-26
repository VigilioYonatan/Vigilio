import { reactive, UnwrapRef, toRefs, Ref, onMounted } from "vue";
import { delayFetch, timer } from "./helpers";
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
}
export type UseQuery<Data, Error> = {
    [K in keyof FetchPropsProps<Data, Error>]: Ref<
        FetchPropsProps<Data, Error>[K]
    >;
} & {
    refetch: (clean?: boolean) => Promise<void>;
};

type FetchPropsProps<Data, Error> = {
    data: UnwrapRef<Data> | Data | null;
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
        retry: 3,
        retryDelay: null,
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
        retry,
        retryDelay,
        clean,
        transformData,
        onError,
        onSuccess,
    } = opciones;
    const fetchProps: FetchPropsProps<Data, Error> = reactive({
        data: placeholderData,
        isLoading: null,
        isSuccess: null,
        isFetching: null,
        isSkip: skipFetching,
        isError: null,
        error: null,
        errorTimes: 0,
    });

    async function fetchEndpoint() {
        if (fetchProps.isFetching === false) {
            fetchProps.isFetching = true;
        } else {
            fetchProps.isLoading = true;
        }

        if (delay) {
            await delayFetch(timer(delay));
        }
        if (fetchProps.errorTimes !== 0) {
            await delayFetch(timer(retryDelay ?? 3));
        }

        try {
            const data = await fetching(url);
            fetchProps.isFetching = false;
            fetchProps.isLoading = false;
            fetchProps.isSuccess = true;
            fetchProps.isError = false;
            let transform: Data = data;
            if (transformData) {
                transform = transformData(data);
            }
            if (onSuccess) {
                onSuccess(transform);
            }

            fetchProps.data = transform;
        } catch (error: unknown) {
            fetchProps.errorTimes += 1;
            if (retry && fetchProps.errorTimes < retry) {
                await fetchEndpoint();
                return;
            }

            fetchProps.isError = true;
            fetchProps.isLoading = false;
            fetchProps.isFetching = false;
            fetchProps.isSuccess = false;
            fetchProps.error = error as Error;
            if (onError) {
                onError(error as Error);
            }
        }
    }

    onMounted(async () => {
        if (fetchProps.isSkip) return;
        if (!staleTime) {
            await fetchEndpoint();
            return;
        }
        await fetchEndpoint();
        const interval = setInterval(async () => {
            await refetch(clean);
        }, timer(staleTime));
        return () => clearInterval(interval);
    });
    onMounted(() => {
        if (
            !refetchIntervalInBackground &&
            fetchProps.isLoading &&
            fetchProps.isFetching
        )
            return;

        const evt = async () => {
            if (
                document.visibilityState === "visible" &&
                refetchIntervalInBackground
            ) {
                await refetch(clean);
            }
        };
        document.addEventListener("visibilitychange", evt);
    });
    onMounted(async () => {
        if (
            !refetchOnReconnect &&
            fetchProps.isLoading &&
            fetchProps.isFetching
        )
            return;
        window.addEventListener("online", async () => {
            await refetch(clean);
        });
    });
    function restart() {
        fetchProps.isError = null;
        fetchProps.isSuccess = null;
        fetchProps.data = placeholderData;
        fetchProps.error = null;
    }
    async function refetch(clean: boolean = true) {
        if (clean) {
            restart();
        }
        await fetchEndpoint();
    }

    return { ...(toRefs(fetchProps) as any), refetch };
}
export default useQuery;
