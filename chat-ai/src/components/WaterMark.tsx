import { useSignal } from "@preact/signals";
import { JSX, useEffect, useRef } from "react";
import configVigilio from "../config";
import { Props } from "../types";

interface WatermarkProps {
    children: JSX.Element | JSX.Element[];
    props: Props;
}

const Watermark = ({ children, props }: WatermarkProps) => {
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
                href={`${configVigilio.vigilio_services_url}?lang=${props.lang}`}
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
                {children}
            </a>
        );
    }

    return (
        <a
            ref={watermarkRef}
            href={configVigilio.vigilio_services_url}
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
            {children}
        </a>
    );
};

export default Watermark;
