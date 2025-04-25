import { useEffect, useRef, useState } from "preact/hooks";
import { lazy, Suspense } from "preact/compat";
import "../assets/index.css";
import { Props } from "../types";
import Cloud from "./Cloud";

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
    console.log({ props });

    const [isOpen, setIsOpen] = useState<boolean>(
        JSON.parse(localStorage.getItem("bot-open") || "false") || false
    );

    const timeoutId = useRef<number | null>(null);

    const [isVisible, setIsVisible] = useState<boolean>(isOpen);

    function onClose() {
        setIsOpen(false);
        localStorage.removeItem("bot-open");
    }
    function onOpen() {
        setIsOpen(!isOpen);
        localStorage.setItem("bot-open", "true");
    }

    useEffect(() => {
        if (!isOpen) {
            timeoutId.current = window.setTimeout(() => {
                setIsVisible(false);
            }, 300);
        } else {
            setIsVisible(isOpen);
        }
        return () => {
            if (timeoutId.current) {
                clearTimeout(timeoutId.current);
                timeoutId.current = null;
            }
        };
    }, [isOpen]);

    if (isOpen && !isVisible) setIsVisible(true);

    return (
        <>
            {isVisible ? (
                <Suspense fallback={null}>
                    <AssistantVirtual
                        props={props}
                        isOpen={isOpen}
                        className={`vigilio-relative ${
                            props.mobile_mode === "chat"
                                ? "vigilio-button-container-ai-chat"
                                : "vigilio-button-container-ai"
                        } ${isOpen ? "visible" : "invisible"}`}
                        onClose={onClose}
                    />
                </Suspense>
            ) : null}
            <div class="vigilio-button-content-ai">
                <div
                    style={{
                        position: "absolute",
                        top: "-1rem",
                        right: "-1rem",
                    }}
                >
                    <Cloud
                        text={`Hola, me llamo ${props.name_ai}. ¿En qué puedo ayudarte hoy? 😊`}
                    />
                </div>
                <button
                    class="vigilio-button-ai"
                    type="button"
                    aria-label="open chat ai"
                    onClick={isOpen ? onClose : onOpen}
                >
                    <Suspense fallback={null}>
                        {props.type_button === "chat-gpt" ? (
                            <ChatGPTLogo />
                        ) : null}
                        {props.type_button === "deepseek" ? (
                            <DeepseekLogo />
                        ) : null}

                        {props.type_button === "bot" ? <BotLogo /> : null}

                        {props.type_button === "logo" ? (
                            <img
                                src={props.logo_ai_chat}
                                width={200}
                                height={200}
                                alt="bot logo"
                                title="bot"
                                loading="lazy"
                            />
                        ) : null}
                    </Suspense>
                </button>
            </div>
        </>
    );
}

export default ChatButton;
