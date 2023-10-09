import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay?: number): T {
    const [debounceValue, setDebounceValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(value);
        }, delay || 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [value]);

    return debounceValue as T;
}
