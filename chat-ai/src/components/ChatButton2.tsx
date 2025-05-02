import Cloud from "./Cloud";
import { useEffect, useRef } from "preact/hooks";
import { lazy, Suspense } from "preact/compat";
import type { Props } from "../types";
import { Signal, useSignal } from "@preact/signals";
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

function ChatButton2(props: Signal<Props>) {
    const defaultProps: Partial<Props> = {
        color: "#00809F",
        name_ai: "Vigilio AI",
        type_button: "chat-gpt",
        mobile_mode: "normal",
        rounded_button: 1,
        chat_width: 380,
        height: 512,
        init_with_form: false,
        custom_greet_cloud:
            props.value.lang === "es"
                ? "Hola, me llamo {{name_ai}}. ¿En qué puedo ayudarte hoy? 😊"
                : "Hello, my name is {{name_ai}}. How can I help you today? 😊",
        custom_greet_chat:
            props.value.lang === "es"
                ? "¡Hola! Soy {{name_ai}}, tu asistente virtual con inteligencia artificial. 😊 ¿En qué puedo ayudarte hoy?"
                : "Hello! I'm {{name_ai}}, your AI-powered virtual assistant. 😊 How can I help you today?",

        isShowCloud: true,
        lang: "en",
        position: "bottom-right",
        zIndex: 999,
        test_url: null,
        form_title:
            "Rellene el formulario a continuación para una atención personalizada.",
    };

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
    useEffect(() => {
        props.value = { ...defaultProps, ...props.value };
    }, []);
    useEffect(() => {
        document.body.style.cssText = `
        --vigilio-primary: ${props.value.color};
        --vigilio-chat-width: ${props.value.chat_width}px;
        --vigilio-button-radius: ${props.value.rounded_button};
        `;
    }, [props.value]);

    return (
        <>
            {isVisible.value ? (
                <Suspense fallback={null}>
                    <AssistantVirtual
                        props={props.value as Props}
                        isOpen={isOpen.value}
                        onClose={onClose}
                    />
                </Suspense>
            ) : null}
            <div
                class={`vigilio-button-content-ai ${
                    props.value.position === "bottom-right"
                        ? "vigilio-button-content-ai-bottom-right"
                        : props.value.position === "bottom-left"
                        ? "vigilio-button-content-ai-bottom-left"
                        : props.value.position === "top-left"
                        ? "vigilio-button-content-ai-top-left"
                        : props.value.position === "top-right"
                        ? "vigilio-button-content-ai-top-right"
                        : "vigilio-button-content-ai-bottom-right"
                }`}
            >
                {props.value.isShowCloud && !isVisible.value ? (
                    <div
                        style={{
                            position: "absolute",
                            top: "-2rem",
                            right: "-1rem",
                        }}
                    >
                        <Cloud
                            text={props.value.custom_greet_cloud?.replaceAll(
                                "{{name_ai}}",
                                props.value.name_ai || "Vigilio AI"
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
                    {props.value.type_button === "chat-gpt" ? (
                        <Suspense fallback={null}>
                            <ChatGPTLogo />
                        </Suspense>
                    ) : null}
                    {props.value.type_button === "deepseek" ? (
                        <Suspense fallback={null}>
                            <DeepseekLogo />
                        </Suspense>
                    ) : null}

                    {props.value.type_button === "bot" ? (
                        <Suspense fallback={null}>
                            <BotLogo />
                        </Suspense>
                    ) : null}

                    {props.value.type_button === "logo" ? (
                        <Suspense fallback={null}>
                            <img
                                src={props.value.logo_ai_chat}
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

export default ChatButton2;
