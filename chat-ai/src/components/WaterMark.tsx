import { useSignal } from "@preact/signals";
import { useEffect, useRef } from "react";

interface WatermarkProps {
    companyName?: string;
    link?: string;
}

const Watermark = ({
    companyName = "Vigilio Services",
    link = "https://www.vigilio-services.com",
}: WatermarkProps) => {
    const watermarkRef = useRef<HTMLAnchorElement>(null);
    const isBlocked = useSignal(false);

    useEffect(() => {
        const markedDocument = document.querySelector(
            ".vigilio-powered-by"
        ) as HTMLElement;

        const interaval = setInterval(() => {
            if (!markedDocument) {
                isBlocked.value = true;
            } else {
                function estaOculto(elemento: HTMLElement) {
                    const estilo = getComputedStyle(elemento);
                    const transform =
                        estilo.transform || estilo.webkitTransform;

                    const isTranslatedOffScreen = transform.includes("-9999px");

                    return (
                        !elemento.offsetParent ||
                        !elemento.offsetWidth ||
                        !elemento.offsetHeight ||
                        isTranslatedOffScreen ||
                        elemento.style.clipPath === "circle(0 at 0 0)" ||
                        elemento.style.width === "0px" ||
                        elemento.style.height === "0px" ||
                        elemento.getAttribute("aria-hidden") === "true" ||
                        elemento.hasAttribute("hidden") ||
                        estilo.visibility === "hidden" ||
                        estilo.display === "none" ||
                        estilo.opacity.startsWith("0")
                    );
                }
                if (estaOculto(markedDocument)) {
                    isBlocked.value = true;
                }
                if (!markedDocument.innerHTML.startsWith("Powered by")) {
                    isBlocked.value = true;
                }
            }
        }, 3000);
        return () => {
            clearInterval(interaval);
        };
    }, []);
    if (!isBlocked.value) {
        return (
            <a
                ref={watermarkRef}
                href={link}
                target="_blank"
                rel="noreferrer"
                style={{
                    display: "block !important",
                    visibility: "visible !important",
                    opacity: "1 !important",
                    position: "relative !important",
                }}
                className="vigilio-powered-by"
            >
                Powered by <b>{companyName}</b>
            </a>
        );
    }

    return (
        <a
            ref={watermarkRef}
            href={link}
            target="_blank"
            rel="noreferrer"
            style={{
                display: "block !important",
                visibility: "visible !important",
                opacity: "1 !important",
                position: "relative !important",
            }}
            className="vigilio-powered-by"
        >
            Powered by <b>{companyName}</b>
        </a>
    );
};

export default Watermark;
