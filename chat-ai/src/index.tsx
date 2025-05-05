import ChatButton from "./components/ChatButton";
import { render } from "preact/compat";
import type { Props } from "./types";
import configVigilio from "./config";

function init(props: Props | undefined = undefined) {
    if (typeof window !== "undefined") {
        // biome-ignore lint/suspicious/noConsoleLog: <explanation>
        console.log(
            "%cVIGILIO SERVICES",
            "font-family:monospace;font-size:24px;color:#fff;text-shadow:2px 2px 4px #000000;font-weight:2rem",
            `${configVigilio.vigilio_services_chat} - chat AI installed`
        );
        const chatAiElement = document.createElement("div");
        document.body.appendChild(chatAiElement);
        render(
            <ChatButton
                props={{ ...(props as Props), element: chatAiElement }}
            />,
            chatAiElement
        );
    }
}
const ChatAI = {
    init,
};
if (typeof window !== "undefined") {
    (window as any).ChatAI = { init };
}

export { type Props, ChatButton };

export default ChatAI;
