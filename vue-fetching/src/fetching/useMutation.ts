import { Ref, UnwrapRef, reactive, toRefs } from "vue";

export interface OptionsQuery {
    skipFetching: boolean;
}

export interface MoreOptions<Data, Error> {
    onSuccess?: (data: Data) => void;
    onError?: (data: Error) => void;
    transformData?: (data: Data) => Data;
}
type FetchPropsProps<Data, Error> = {
    data: UnwrapRef<Data> | Data | null;
    isLoading: boolean | null;
    isSuccess: boolean | null;
    // isFetching: boolean | null;
    isSkip: boolean;
    isError: boolean | null;
    error: Error | null;
};
export type UseMutation<Data, Body, Error> = {
    [K in keyof FetchPropsProps<Data, Error>]: Ref<
        FetchPropsProps<Data, Error>[K]
    >;
} & {
    mutate: (body: Body, moreOption?: MoreOptions<Data, Error> | null) => void;
    mutateAsync: (body: Body) => Promise<Data | undefined>;
    disabledSkip: () => void;
};

function useMutation<Data, Body, Error>(
    url: string,
    fetching: (url: string, body: Body) => Promise<Data>,
    options: OptionsQuery | null = null
): UseMutation<Data, Body, Error> {
    let opciones: OptionsQuery = {
        skipFetching: false,
    };
    if (options) {
        opciones = { ...opciones, ...options };
    }
    const { skipFetching } = opciones;

    const fetchProps: FetchPropsProps<Data, Error> = reactive({
        data: null,
        isLoading: null,
        isSuccess: null,
        isError: null,
        error: null,
        isSkip: skipFetching,
    });

    async function fetch(
        body: Body,
        moreOption: MoreOptions<Data, Error> | null
    ) {
        if (fetchProps.isSkip) return;
        fetchProps.isLoading = true;
        try {
            const result = await fetching(url, body);
            fetchProps.data = result;
            fetchProps.isLoading = false;
            fetchProps.isError = false;
            fetchProps.isSuccess = true;

            if (moreOption && moreOption.onSuccess) {
                moreOption.onSuccess(result);
            }
            if (moreOption && moreOption.transformData) {
                const transformData = moreOption.transformData(result);
                fetchProps.data = transformData;
                return transformData;
            }

            return result;
        } catch (error) {
            fetchProps.isLoading = false;
            fetchProps.isSuccess = false;
            fetchProps.isError = true;
            fetchProps.error = error as Error;

            if (moreOption && moreOption.onError) {
                moreOption.onError(error as Error);
            }
            throw error;
        }
    }

    function disabledSkip() {
        if (!fetchProps.isSkip) return;
        fetchProps.isSkip = false;
    }

    function mutate(
        body: Body,
        moreOption: MoreOptions<Data, Error> | null = null
    ) {
        fetch(body, moreOption);
    }
    async function mutateAsync(body: Body) {
        const result = await fetch(body, null);
        return result;
    }
    return {
        ...toRefs(fetchProps),
        mutate,
        mutateAsync,
        disabledSkip,
    };
}
export default useMutation;
