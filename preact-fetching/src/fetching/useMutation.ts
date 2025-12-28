import { useRef } from "preact/hooks";
import { cache, delayFetch, timer } from "./helpers.js";
import { useSignal } from "@preact/signals";

export interface OptionsQuery {
    skipFetching?: boolean;
    delay?: number | null;
    retry?: number | null;
    retryDelay?: number | null;
    isCaching?: boolean | number | null;
}

export interface MoreOptions<Data, Error> {
    onSuccess?: (data: Data) => void;
    onError?: (data: Error) => void;
    transformData?: (data: Data) => Data;
}
export type FetchPropsProps<Data, Body, Error> = {
    data: Data | null;
    isLoading: boolean | null;
    isSuccess: boolean | null;
    isSkip: boolean;
    isError: boolean | null;
    error: Error | null;
    errorTimes: number;
    body: Body | null;
};
export type UseMutation<Data, Body, Error> = {
    [K in keyof FetchPropsProps<Data, Body, Error>]: FetchPropsProps<
        Data,
        Body,
        Error
    >[K];
} & {
    mutate: (
        body: Body,
        moreOption?: MoreOptions<Data, Error> | null
    ) => Promise<void>;
    mutateAsync: (body: Body) => Promise<Data | undefined>;
    disabledSkip: () => void;
    transformData: (cb: (data: Data) => Data) => void;
    cancel: () => void;
};

function useMutation<Data, Body, Error>(
    url: string,
    fetching: (url: string, body: Body, signal: AbortSignal) => Promise<Data>,
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
    const controllerRef = useRef<AbortController | null>(null);

    const fetchprops = useSignal<FetchPropsProps<Data, Body, Error>>({
        data: null,
        isLoading: null,
        isSuccess: null,
        isError: null,
        error: null,
        isSkip: skipFetching,
        errorTimes: 0,
        body: null,
    });

    async function fetch(
        body: Body,
        moreOption: MoreOptions<Data, Error> | null
    ) {
        if (fetchprops.value.isSkip) return;
        if (controllerRef.current) {
            controllerRef.current.abort();
        }
        controllerRef.current = new AbortController();
        fetchprops.value = { ...fetchprops.value, isLoading: true };
        if (delay) {
            await delayFetch(timer(delay));
        }
        if (fetchprops.value.errorTimes !== 0) {
            await delayFetch(timer(retryDelay ?? 3));
        }
        try {
            const cche = cache.get(url);
            if (cche) {
                let transform: Data = cche as Data;
                if (moreOption?.transformData) {
                    transform = moreOption?.transformData(transform);
                }
                if (moreOption?.onSuccess) {
                    moreOption?.onSuccess(transform);
                }
                fetchprops.value = {
                    ...fetchprops.value,
                    isLoading: false,
                    isSuccess: true,
                    isError: false,
                    data: transform,
                };
                return undefined;
            }
            const data = await fetching(
                url,
                body,
                controllerRef.current.signal
            );

            let transform: Data = data;
            if (moreOption?.transformData) {
                transform = moreOption.transformData(data);
            }
            if (moreOption?.onSuccess) {
                moreOption.onSuccess(transform);
            }
            if (isCaching) {
                cache.set(
                    url,
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
                body: null,
            };
            if (moreOption?.onError) {
                moreOption.onError(error as Error);
            }
            return undefined;
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
        fetchprops.value = {
            ...fetchprops.value,
            body,
        };
        await fetch(body, moreOption);
    }
    async function mutateAsync(body: Body) {
        fetchprops.value = {
            ...fetchprops.value,
            body,
        };
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
    function cancel() {
        if (controllerRef.current) {
            controllerRef.current.abort();
            controllerRef.current = null;
        }
    }
    return {
        ...fetchprops.value,
        mutate,
        mutateAsync,
        disabledSkip,
        transformData: transform,
        cancel,
    };
}
export default useMutation;
