import ChatButton from "./components/ChatButton";
import { render } from "preact/compat";
import type { Props } from "./types";
import configVigilio from "./config";

function init(props: Props | undefined = undefined) {
    if (typeof window !== "undefined") {
        const defaultProps: Partial<Props> = {
            color: "#00809F",
            name_ai: "Vigilio AI",
            type_button: "chat-gpt",
            background_color: "white",
            mobile_mode: "normal",
            rounded_button: 1,
            chat_width: "380px",
            height: "512px",
            chat_assistant_color: "#f5f5f5",
            chat_user_color: "#e1fec4",
            init_with_form: false,
            custom_greet_cloud:
                props?.lang === "es"
                    ? "Hola, me llamo {{name_ai}}. ¿En qué puedo ayudarte hoy? 😊"
                    : "Hello, my name is {{name_ai}}. How can I help you today? 😊",

            isShowCloud: true,
            lang: "es",
            position: "bottom-right",
            zIndex: 999,
            logo_ai_chat:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyRF1cf1FFwDDHXDLKT7xB_rZfod-5DbhKsw&s",
            test_url: null,
        };
        const propsButton: Props = {
            ...defaultProps,
            ...(props || {}),
        } as Props;
        // biome-ignore lint/suspicious/noConsoleLog: <explanation>
        console.log(
            "%cVIGILIO SERVICES",
            "font-family:monospace;font-size:24px;color:#fff;text-shadow:2px 2px 4px #000000;font-weight:2rem",
            `${configVigilio.vigilio_services_chat} - chat AI installed`
        );
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
        --vigilio-chat-assitant-color: ${propsButton.chat_assistant_color};
        --vigilio-chat-user-color: ${propsButton.chat_user_color};
        --vigilio-height: ${propsButton.height};
        --vigilio-button-radius: ${propsButton.rounded_button};
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
