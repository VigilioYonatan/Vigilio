import { cache, delayFetch, timer } from "./helpers";
import { useSignal } from "@preact/signals";

export interface OptionsQuery {
    skipFetching?: boolean;
    delay?: number | null;
    retry?: number | null;
    isCaching?: boolean | number | null;
    retryDelay?: number | null;
}

export interface MoreOptions<Data, Error> {
    onSuccess?: (data: Data) => void;
    onError?: (data: Error) => void;
    transformData?: (data: Data) => Data;
}
export type FetchPropsProps<Data, Error> = {
    data: Data | null;
    isLoading: boolean | null;
    isSuccess: boolean | null;
    isSkip: boolean;
    isError: boolean | null;
    error: Error | null;
    errorTimes: number;
};
export type UseMutation<Data, Body, Error> = {
    [K in keyof FetchPropsProps<Data, Error>]: FetchPropsProps<Data, Error>[K];
} & {
    mutate: (
        body: Body,
        moreOption?: MoreOptions<Data, Error> | null
    ) => Promise<void>;
    mutateAsync: (body: Body) => Promise<Data | undefined>;
    disabledSkip: () => void;
    transformData: (cb: (data: Data) => Data) => void;
};

function useMutation<Data, Body, Error>(
    key: string,
    fetching: (url: string, body: Body) => Promise<Data>,
    options: OptionsQuery | null = null
): UseMutation<Data, Body, Error> {
    let opciones: Required<OptionsQuery> = {
        skipFetching: false,
        delay: null,
        retry: 1,
        isCaching: null,
        retryDelay: null,
    };
    if (options) {
        opciones = { ...opciones, ...options };
    }
    const { skipFetching, delay, retry, retryDelay, isCaching } = opciones;

    const fetchprops = useSignal<FetchPropsProps<Data, Error>>({
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
        if (fetchprops.value.isSkip) return;
        fetchprops.value = { ...fetchprops.value, isLoading: true };
        if (delay) {
            await delayFetch(timer(delay));
        }
        if (fetchprops.value.errorTimes !== 0) {
            await delayFetch(timer(retryDelay ?? 3));
        }
        try {
            const cche = cache.get(key);
            if (cche) {
                fetchprops.value = {
                    ...fetchprops.value,
                    isLoading: false,
                    isSuccess: true,
                    isError: false,
                    data: cche,
                };
                return;
            }
            const data = await fetching(key, body);

            let transform: Data = data;
            if (moreOption?.transformData) {
                transform = moreOption.transformData(data);
            }
            if (moreOption?.onSuccess) {
                moreOption.onSuccess(transform);
            }
            if (isCaching) {
                cache.set(
                    key,
                    transform,
                    typeof isCaching === "number" ? isCaching : null
                );
            }
            fetchprops.value = {
                ...fetchprops.value,
                isLoading: false,
                isSuccess: true,
                isError: false,
                data: transform,
            };

            return transform;
        } catch (error) {
            fetchprops.value = {
                ...fetchprops.value,
                errorTimes: fetchprops.value.errorTimes + 1,
            };
            if (retry && fetchprops.value.errorTimes < retry) {
                await fetch(body, moreOption);
                return;
            }
            fetchprops.value = {
                ...fetchprops.value,
                isLoading: false,
                isSuccess: false,
                isError: true,
                error: error as Error,
            };
            if (moreOption?.onError) {
                moreOption.onError(error as Error);
            }
            throw error;
        }
    }

    function disabledSkip() {
        if (!fetchprops.value.isSkip) return;
        fetchprops.value = {
            ...fetchprops.value,
            isSkip: false,
        };
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
    function transform(cb: (data: Data) => Data) {
        const data = cb(fetchprops.value.data!);
        fetchprops.value = {
            ...fetchprops.value,
            data,
        };
    }
    return {
        ...fetchprops.value,
        mutate,
        mutateAsync,
        disabledSkip,
        transformData: transform,
    };
}
export default useMutation;
