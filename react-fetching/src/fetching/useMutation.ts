import { useState } from "react";
import { delayFetch, timer } from "./helpers";

export interface OptionsQuery {
    skipFetching?: boolean;
    delay?: number | null;
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
};

function useMutation<Data, Body, Error>(
    url: string,
    fetching: (url: string, body: Body) => Promise<Data>,
    options: OptionsQuery | null = null
): UseMutation<Data, Body, Error> {
    let opciones: Required<OptionsQuery> = {
        skipFetching: false,
        delay: null,
    };
    if (options) {
        opciones = { ...opciones, ...options };
    }
    const { skipFetching, delay } = opciones;

    const [fetchProps, setFetchProps] = useState<FetchPropsProps<Data, Error>>({
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
        setFetchProps({ ...fetchProps, isLoading: true });
        if (delay) {
            await delayFetch(timer(delay));
        }

        try {
            const data = await fetching(url, body);

            let transform: Data = data;
            if (moreOption && moreOption.transformData) {
                transform = moreOption.transformData(data);
            }
            if (moreOption && moreOption.onSuccess) {
                moreOption.onSuccess(transform);
            }
            setFetchProps({
                ...fetchProps,
                isLoading: false,
                isSuccess: true,
                isError: false,
                data: transform,
            });
            return transform;
        } catch (error) {
            setFetchProps({
                ...fetchProps,
                isLoading: false,
                isSuccess: false,
                isError: true,
                error: error as Error,
            });
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
        ...fetchProps,
        mutate,
        mutateAsync,
        disabledSkip,
    };
}
export default useMutation;
