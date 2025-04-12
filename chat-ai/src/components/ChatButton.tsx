import { useState } from "preact/hooks";
import { lazy, Suspense } from "preact/compat";
import "../assets/index.css";
import { Props } from "../types";

import CHATGPTLOGO from "../assets/chat-gpt-logo.webp";
const AssistantVirtual = lazy(
    () => import(/* webpackChunkName: "Home" */ "./AssistantVirtual")
);

function ChatButton(props: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(
        JSON.parse(localStorage.getItem("bot-open") || "false") || false
    );

    function onClose() {
        setIsOpen(false);
        localStorage.removeItem("bot-open");
    }
    function onOpen() {
        setIsOpen(true);
        localStorage.setItem("bot-open", "true");
    }
    return (
        <div
            class="vigilio vigilio-chat-ai buttons-pages-custom "
            style={{
                "--vigilio-primary": props.color,
                "--vigilio-background": props.background,
            }}
        >
            {isOpen ? (
                <Suspense fallback={null}>
                    <AssistantVirtual isOpen={isOpen} onClose={onClose} />
                </Suspense>
            ) : null}
            <button
                class="vigilio-button-ai "
                type="button"
                aria-label="open chat ai"
                onClick={onOpen}
            >
                {props.type_button ? (
                    <img
                        class="vigilio-rotating"
                        width={200}
                        height={200}
                        src={CHATGPTLOGO}
                        alt=""
                    />
                ) : null}
            </button>
        </div>
    );
}

export default ChatButton;
