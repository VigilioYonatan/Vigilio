import { useState } from 'react';

export interface OptionsQuery {
  skipFetching: boolean;
}

export interface MoreOptions<Data, Error> {
  onSuccess?: (data: Data) => void;
  onError?: (data: Error) => void;
  transformData?: (data: Data) => Data;
}

export type UseMutation<Data, Body, Error> = {
  mutate: (body: Body, moreOption?: MoreOptions<Data, Error> | null) => void;
  mutateAsync: (body: Body) => Promise<Data | undefined>;
  data: Data | null;
  isLoading: boolean | null;
  isSuccess: boolean | null;
  error: Error | null;
  isError: boolean | null;
  isSkip: boolean | null;
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
  const [data, setData] = useState<Data | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [isError, setIsError] = useState<boolean | null>(null);
  const [error, setError] = useState<null | Error>(null);
  const [isSkip, setIsSkip] = useState<boolean>(skipFetching);

  async function fetch(
    body: Body,
    moreOption: MoreOptions<Data, Error> | null
  ) {
    if (isSkip) return;
    setIsLoading(true);
    try {
      const datas = await fetching(url, body);

      setData(datas);
      setIsLoading(false);
      setIsError(false);
      setIsSuccess(true);
      if (moreOption && moreOption.onSuccess) {
        moreOption.onSuccess(datas);
      }
      if (moreOption && moreOption.transformData) {
        const transformData = moreOption.transformData(datas);
        setData(transformData);
        return transformData;
      }

      return datas;
    } catch (error) {
      setIsLoading(false);
      setIsSuccess(false);
      setIsError(true);

      setError(error as Error);

      if (moreOption && moreOption.onError) {
        moreOption.onError(error as Error);
      }
      throw error;
    }
  }

  function disabledSkip() {
    if (!isSkip) return;
    setIsSkip(false);
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
    mutate,
    mutateAsync,
    data,
    isLoading,
    isSuccess,
    error,
    isError,
    isSkip,
    disabledSkip,
  };
}
export default useMutation;
