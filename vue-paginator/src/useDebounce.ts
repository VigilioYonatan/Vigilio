import { ref, toRef, watch } from "vue";

export function useDebounce<T>(value: T, delay?: number): T {
    const refValue = toRef(value);
    const debounceValue = ref<T>(refValue.value);

    watch(
        [refValue],
        () => {
            const timer = setTimeout(() => {
                (debounceValue.value as T) = refValue.value;
            }, delay || 1000);

            return () => {
                clearTimeout(timer);
            };
        },
        { deep: true }
    );

    return debounceValue as T;
}
