import { useState } from "preact/hooks";
import { lazy, Suspense } from "preact/compat";
const AssistantVirtual = lazy(
    () => import(/* webpackChunkName: "Home" */ "./AssistantVirtual")
);

function ChatButton() {
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
        <div class="vigilio vigilio-chat-ai buttons-pages-custom fixed bottom-32 right-10 z-[99] ">
            {isOpen ? (
                <Suspense fallback={null}>
                    <AssistantVirtual isOpen={isOpen} onClose={onClose} />
                </Suspense>
            ) : null}
            <button
                class="vigilio-button-ai bg-primary w-[55px] h-[45px] flex justify-center items-center rounded-md text-white"
                type="button"
                aria-label="open chat ai"
                onClick={onOpen}
            >
                open2
            </button>
        </div>
    );
}

export default ChatButton;
