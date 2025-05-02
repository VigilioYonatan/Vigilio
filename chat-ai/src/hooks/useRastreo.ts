import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";
import useInactivity from "./useInactiviy";
import { aiRastreoStoreApi } from "../apis";

interface useRastreoProps {
    base_url: string;
    api_key: string;
    token: string;
}
function useRastreo({ base_url, api_key, token }: useRastreoProps) {
    const scrollEndCount = useSignal<number>(0);
    const isScrolling = useSignal<boolean>(false);
    const clicks = useSignal<number>(0);
    const seconds = useSignal<number>(0);
    const tempSeconds = useSignal<number>(0);
    const path = useSignal<number>(1);
    const ïsBlock = useSignal(false);

    const aiRastreoStoreMutation = aiRastreoStoreApi({ base_url });

    function updated() {
        if (!ïsBlock.value) {
            aiRastreoStoreMutation.mutate({
                api_key,
                token,
                event: {
                    path: window.location.pathname,
                    seconds: seconds.value,
                    clicks: clicks.value,
                    scrolls: scrollEndCount.value,
                    isVisit: path.value < 2,
                },
            });

            seconds.value = 0;
            clicks.value = 0;
            scrollEndCount.value = 0;
            path.value = path.value + 1;
        }
    }
    //omite los clicks del header  y footer y lee los clicks
    function actualizarContador(e: Event) {
        const target = e.target as HTMLElement;
        if (target.closest("header") || target.closest("footer")) {
            return;
        }
        clicks.value = clicks.value + 1;
    }

    useEffect(() => {
        document.addEventListener("click", actualizarContador);
        return () => {
            document.removeEventListener("click", actualizarContador);
        };
    }, []);

    //cada vez que cierra, regrese, recargue se actualiza los datos
    useEffect(() => {
        const interval = setInterval(() => {
            seconds.value = seconds.value + 1;
        }, 1000);

        const handleVisibilityChange = () => {
            if (document.hidden) {
                updated();
            }
        };
        document.addEventListener("visibilitychange", handleVisibilityChange);
        document.addEventListener("popstate", updated);
        document.addEventListener("beforeunload", updated);
        // router.events.on("routeChangeStart", updated);
        return () => {
            clearInterval(interval);
            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange
            );
            document.removeEventListener("popstate", updated);
            document.removeEventListener("beforeunload", updated);
        };
    }, [clicks, scrollEndCount, path, seconds, ïsBlock.value]);

    useEffect(() => {
        let scrollTimer: NodeJS.Timeout;
        const handleScrollStart = () => {
            isScrolling.value = true;
            clearTimeout(scrollTimer);
        };

        const handleScrollEnd = () => {
            isScrolling.value = false;
            scrollTimer = setTimeout(() => {
                if (!isScrolling) {
                    scrollEndCount.value = scrollEndCount.value + 1;
                }
            }, 200);
        };

        window.addEventListener("scroll", handleScrollStart);
        window.addEventListener("scroll", handleScrollEnd);

        return () => {
            window.removeEventListener("scroll", handleScrollStart);
            window.removeEventListener("scroll", handleScrollEnd);
            clearTimeout(scrollTimer);
        };
    }, [isScrolling, scrollEndCount]);

    // 3 minutos si no esta activo se elimina el contador
    useInactivity({
        timeout: 180000,
        onInactive() {
            // seconds.value = seconds.value + 10;
            ïsBlock.value = true;
            tempSeconds.value = seconds.value;
        },
        onActive() {
            seconds.value = tempSeconds.value;
            ïsBlock.value = false;
        },
    });
    return {};
}

export default useRastreo;
