import { reactive, UnwrapRef, toRefs, watchEffect, Ref } from "vue";
export interface OptionsQuery<Data> {
    skipFetching?: boolean;
    placeholderData?: Data | null;
    transformData?: ((data: Data) => Data) | null;
}
export type UseQuery<Data, Error> = {
    [K in keyof FetchPropsProps<Data, Error>]: Ref<
        FetchPropsProps<Data, Error>[K]
    >;
} & {
    refetch: () => void;
};

type FetchPropsProps<Data, Error> = {
    data: UnwrapRef<Data> | Data | null;
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
    options: OptionsQuery<Data> | null = null
): UseQuery<Data, Error> {
    let opciones: Required<OptionsQuery<Data>> = {
        skipFetching: false,
        placeholderData: null,
        transformData: null,
    };

    if (options) {
        opciones = { ...opciones, ...options };
    }
    const { skipFetching, placeholderData, transformData } = opciones;
    const fetchProps: FetchPropsProps<Data, Error> = reactive({
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
            fetchProps.isFetching = true;
        } else {
            fetchProps.isLoading = true;
        }
        try {
            const data = await fetching(url);
            fetchProps.data = data;
            fetchProps.isFetching = false;
            fetchProps.isLoading = false;
            fetchProps.isSuccess = true;
            fetchProps.isError = false;
            if (transformData) {
                const transform = transformData(data);
                fetchProps.data = transform;
                return transformData;
            }
        } catch (error: unknown) {
            fetchProps.isLoading = false;
            fetchProps.isFetching = false;
            fetchProps.isError = true;
            fetchProps.isSuccess = false;
            fetchProps.error = error as Error;
        }
    }

    watchEffect(() => {
        if (!fetchProps.isSkip) {
            fetchEndpoint();
        }
    });
    function refetch() {
        fetchEndpoint();
    }
    return { ...toRefs(fetchProps), refetch };
}
export default useQuery;
