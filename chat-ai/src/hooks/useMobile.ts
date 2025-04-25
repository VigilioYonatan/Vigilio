import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export function useIsMobile({ breakpoint = 768 }: { breakpoint?: number }) {
    const isMobile = useSignal<boolean | undefined>(undefined);

    useEffect(() => {
        const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
        const onChange = () => {
            isMobile.value = window.innerWidth < breakpoint;
        };
        mql.addEventListener("change", onChange);
        isMobile.value = window.innerWidth < breakpoint;
        return () => mql.removeEventListener("change", onChange);
    }, []);

    return !!isMobile;
}
