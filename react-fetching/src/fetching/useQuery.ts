import { useEffect, useState } from 'react';

export interface OptionsQuery<Data> {
  skipFetching?: boolean;
  placeholderData?: Data | null;
  transformData?: ((data: Data) => Data) | null;
}
type UseQuery<Data, Error> = {
  data: Data | null;
  isLoading: boolean | null;
  isFetching: boolean | null;
  isSuccess: boolean | null;
  error: Error | null;
  isError: boolean | null;
  isSkip: boolean | null;
  refetching: () => void;
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

  const [data, setData] = useState<Data | null>(placeholderData);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [isFetching, setIsFetching] = useState<boolean | null>(null);
  const [isError, setIsError] = useState<boolean | null>(null);
  const [error, setError] = useState<null | Error>(null);
  const [isSkip] = useState<boolean>(skipFetching);

  async function fetchEndpoint() {
    if (isFetching === false) {
      setIsFetching(true);
    } else {
      setIsLoading(true);
    }
    try {
      const data = await fetching(url);
      setData(data);
      setIsFetching(false);
      setIsLoading(false);
      setIsSuccess(true);
      setIsError(false);

      if (transformData) {
        const transform = transformData(data);
        setData(transform);
        return transformData;
      }
    } catch (error) {
      setIsLoading(false);
      setIsFetching(false);
      setIsError(true);
      setIsSuccess(false);
      setError(error as Error);
    }
    return;
  }
  useEffect(() => {
    if (isSkip) return;
    fetchEndpoint();
  }, [isSkip]);

  function refetching() {
    fetchEndpoint();
  }

  return {
    data,
    isLoading,
    isFetching,
    isSuccess,
    error,
    isError,
    isSkip,
    refetching,
  };
}
export default useQuery;
