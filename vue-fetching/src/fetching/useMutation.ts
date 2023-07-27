import { Ref, UnwrapRef, reactive, toRefs } from "vue";
import { delayFetch, timer } from "./helpers";

export interface OptionsQuery {
    skipFetching?: boolean;
    delay?: number | null;
    retry?: number | null;
    retryDelay?: number | null;
}

export interface MoreOptions<Data, Error> {
    onSuccess?: (data: Data) => void;
    onError?: (data: Error) => void;
    transformData?: (data: Data) => Data;
}
export type FetchPropsProps<Data, Error> = {
    data: UnwrapRef<Data> | Data | null;
    isLoading: boolean | null;
    isSuccess: boolean | null;
    isSkip: boolean;
    isError: boolean | null;
    error: Error | null;
    errorTimes: number;
};
export type UseMutation<Data, Body, Error> = {
    [K in keyof FetchPropsProps<Data, Error>]: Ref<
        FetchPropsProps<Data, Error>[K]
    >;
} & {
    mutate: (
        body: Body,
        moreOption?: MoreOptions<Data, Error> | null
    ) => Promise<void>;
    mutateAsync: (body: Body) => Promise<Data | undefined>;
    disabledSkip: () => void;
};

function useMutation<Data, Body, Error>(
    url: string,
    fetching: (url: string, body: Body) => Promise<Data>,
    options: OptionsQuery | null = null
): UseMutation<Data, Body, Error> {
    let opciones: Required<OptionsQuery> = {
        skipFetching: false,
        delay: null,
        retry: 3,
        retryDelay: null,
    };
    if (options) {
        opciones = { ...opciones, ...options };
    }
    const { skipFetching, delay, retry, retryDelay } = opciones;

    const fetchProps: FetchPropsProps<Data, Error> = reactive({
        data: null,
        isLoading: null,
        isSuccess: null,
        isError: null,
        error: null,
        isSkip: skipFetching,
        errorTimes: 0,
    });

    async function fetch(
        body: Body,
        moreOption: MoreOptions<Data, Error> | null
    ) {
        if (fetchProps.isSkip) return;
        fetchProps.isLoading = true;
        if (delay) {
            await delayFetch(timer(delay));
        }
        if (fetchProps.errorTimes !== 0) {
            await delayFetch(timer(retryDelay ?? 3));
        }

        try {
            const data = await fetching(url, body);
            fetchProps.isLoading = false;
            fetchProps.isSuccess = true;
            fetchProps.isError = false;
            let transform: Data = data;
            if (moreOption && moreOption.transformData) {
                transform = moreOption.transformData(data);
            }
            if (moreOption && moreOption.onSuccess) {
                moreOption.onSuccess(transform);
            }
            fetchProps.data = transform;
            return transform;
        } catch (error) {
            fetchProps.errorTimes += 1;
            if (retry && fetchProps.errorTimes < retry) {
                fetch(body, moreOption);
                return;
            }
            fetchProps.isError = true;
            fetchProps.isLoading = false;
            fetchProps.isSuccess = false;
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

    async function mutate(
        body: Body,
        moreOption: MoreOptions<Data, Error> | null = null
    ) {
        await fetch(body, moreOption);
    }
    async function mutateAsync(body: Body) {
        const result = await fetch(body, null);
        return result;
    }
    return {
        ...(toRefs(fetchProps) as any),
        mutate,
        mutateAsync,
        disabledSkip,
    };
}
export default useMutation;
