import ChatButton from "./components/ChatButton";
import { render } from "preact/compat";
import type { Props } from "./types";

function init(props: Props | undefined = undefined) {
    if (typeof window !== "undefined") {
        const defaultProps: Partial<Props> = {
            color: "#00809F",
            type_button: "chat-gpt",
            background_color: "white",
            mobile_mode: "normal",
            chat_width: "380px",
        };
        const propsButton: Props = {
            ...defaultProps,
            ...(props || {}),
        } as Props;
        const chatAiElement = document.createElement("div");
        chatAiElement.className = `vigilio ${
            props?.mobile_mode === "chat"
                ? "vigilio-chat-ai-chat"
                : "vigilio-chat-ai"
        }  `;
        chatAiElement.style.cssText = `
        --vigilio-primary: ${propsButton.color};
        --vigilio-background: ${propsButton.background_color};
        --vigilio-chat-width: ${propsButton.chat_width};
        `;
        document.body.appendChild(chatAiElement);

        render(<ChatButton {...propsButton} />, chatAiElement);
    }
}
const ChatAI = {
    init,
};
if (typeof window !== "undefined") {
    (window as any).ChatAI = { init };
}
export default ChatAI;
