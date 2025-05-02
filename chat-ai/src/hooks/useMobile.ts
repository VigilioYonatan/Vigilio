import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

export function useIsMobile({ breakpoint = 768 }: { breakpoint?: number }) {
    const isMobile = useSignal<boolean | undefined>(undefined);
    useEffect(() => {
        const checkIfMobile = () => {
            isMobile.value = window.innerWidth < breakpoint;
        };
        checkIfMobile();
        window.addEventListener("resize", checkIfMobile);
        return () => {
            window.removeEventListener("resize", checkIfMobile);
        };
    }, [breakpoint]);

    return isMobile.value;
}
