import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";

function Cloud({ text = "Tu texto aquí" }) {
    const isVisible = useSignal(false);
    useEffect(() => {
        const appearTimeout = setTimeout(() => {
            isVisible.value = true;
        }, 3000);

        const disappearTimeout = setTimeout(() => {
            isVisible.value = false;
        }, 8000);

        return () => {
            clearTimeout(appearTimeout);
            clearTimeout(disappearTimeout);
        };
    }, []);

    return (
        <>
            <div class="vigilio-tooltip visible">
                <p class="text-white text-xs">{text}</p>
                <span class="vigilio-tooltip-arrow"></span>
                <span class="vigilio-tooltip-decoration"></span>
            </div>
            <style jsx>{`
                .vigilio-tooltip {
                    position: relative;
                    padding: 0.25rem 0.25rem 0.25rem -1.5rem;
                    background-color: var(--primary-color);
                    font-weight: bold;
                    border-radius: 0.5rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
                        0 2px 4px -1px rgba(0, 0, 0, 0.06);
                    transition: all 0.3s ease;
                    transition-delay: 0.5s;
                }

                .vigilio-tooltip.visible {
                    width: 210px;
                    opacity: 1;
                    visibility: visible;
                }

                .vigilio-tooltip.hidden {
                    opacity: 0;
                    visibility: hidden;
                    display: none;
                }

                .vigilio-tooltip p {
                    color: white;
                    font-size: 0.75rem;
                }

                .vigilio-tooltip .vigilio-tooltip-arrow {
                    position: absolute;
                    bottom: -8px;
                    right: 1rem;
                    width: 0;
                    height: 0;
                    border-left: 8px solid transparent;
                    border-top: 8px solid var(--primary-color);
                    border-right: 8px solid transparent;
                }

                .vigilio-tooltip .vigilio-tooltip-decoration {
                    position: absolute;
                    top: -4px;
                    left: 0.5rem;
                    width: 0;
                    height: 0;
                    border-left: 4px solid transparent;
                }
            `}</style>
        </>
    );
}

export default Cloud;
