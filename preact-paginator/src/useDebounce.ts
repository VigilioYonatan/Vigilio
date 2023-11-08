import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export function useDebounce<T>(value: T, delay?: number): T {
    const debounceValue = useSignal<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            debounceValue.value = value;
        }, delay || 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [value]);

    return debounceValue.value as T;
}
