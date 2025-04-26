import Cloud from "./Cloud";
import { useEffect, useRef } from "preact/hooks";
import { lazy, Suspense } from "preact/compat";
import { Props } from "../types";
import { useSignal } from "@preact/signals";
import "../assets/index.css";

const AssistantVirtual = lazy(
    () => import(/* webpackChunkName: "AssistanVirtual" */ "./AssistantVirtual")
);
const ChatGPTLogo = lazy(
    () => import(/* webpackChunkName: "ChatGPTLogo" */ "../assets/ChatGPTLogo")
);
const DeepseekLogo = lazy(
    () =>
        import(/* webpackChunkName: "DeepseekLogo" */ "../assets/DeepseekLogo")
);
const BotLogo = lazy(
    () => import(/* webpackChunkName: "BOTLogo" */ "../assets/BotLogo")
);

function ChatButton(props: Props) {
    const isOpen = useSignal<boolean>(
        JSON.parse(localStorage.getItem("bot-open") || "false") || false
    );
    const timeoutId = useRef<number | null>(null);
    const isVisible = useSignal<boolean>(isOpen.value);
    function onClose() {
        isOpen.value = false;
        localStorage.removeItem("bot-open");
    }
    function onOpen() {
        isOpen.value = !isOpen.value;
        localStorage.setItem("bot-open", "true");
    }

    useEffect(() => {
        if (!isOpen) {
            timeoutId.current = window.setTimeout(() => {
                isVisible.value = false;
            }, 2500);
        } else {
            isVisible.value = isOpen.value;
        }
        return () => {
            if (timeoutId.current) {
                clearTimeout(timeoutId.current);
                timeoutId.current = null;
            }
        };
    }, [isOpen]);

    if (isOpen && !isVisible.value) {
        isVisible.value = true;
    }

    return (
        <>
            {isVisible.value ? (
                <Suspense fallback={null}>
                    <AssistantVirtual
                        props={props}
                        isOpen={isOpen.value}
                        className={`vigilio-relative ${
                            props.mobile_mode === "chat"
                                ? "vigilio-button-container-ai-chat"
                                : "vigilio-button-container-ai"
                        } ${isOpen.value ? "visible" : "invisible"}`}
                        onClose={onClose}
                    />
                </Suspense>
            ) : null}
            <div class="vigilio-button-content-ai">
                {props.isShowCloud && !isVisible.value ? (
                    <div
                        style={{
                            position: "absolute",
                            top: "-2rem",
                            right: "-1rem",
                        }}
                    >
                        <Cloud
                            text={props.custom_greet_cloud?.replaceAll(
                                "{{name_ai}}",
                                props.name_ai || "Vigilio AI"
                            )}
                        />
                    </div>
                ) : null}

                <button
                    class="vigilio-button-ai"
                    type="button"
                    aria-label="open chat ai"
                    onClick={isOpen.value ? onClose : onOpen}
                >
                    {props.type_button === "chat-gpt" ? (
                        <Suspense fallback={null}>
                            <ChatGPTLogo />
                        </Suspense>
                    ) : null}
                    {props.type_button === "deepseek" ? (
                        <Suspense fallback={null}>
                            <DeepseekLogo />
                        </Suspense>
                    ) : null}

                    {props.type_button === "bot" ? (
                        <Suspense fallback={null}>
                            <BotLogo />
                        </Suspense>
                    ) : null}

                    {props.type_button === "logo" ? (
                        <Suspense fallback={null}>
                            <img
                                src={props.logo_ai_chat}
                                width={200}
                                height={200}
                                alt="bot logo"
                                title="bot"
                                loading="lazy"
                            />
                        </Suspense>
                    ) : null}
                </button>
            </div>
        </>
    );
}

export default ChatButton;
