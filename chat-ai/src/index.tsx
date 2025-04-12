import ChatButton from "./components/ChatButton";
import { render } from "preact/compat";
import type { Props } from "./types";
import { enviroments } from "./config";

if (typeof window !== "undefined") {
    function init(props: Props | undefined = undefined) {
        let propsButton: Props = {} as Props;
        if (!props) {
            propsButton = {
                ...propsButton,
                color: "#00809F",
                type_button: "chat-gpt",
                background: "white",
            };
        }
        render(<ChatButton {...propsButton} />, document.body);
    }
    if (enviroments.NODE_ENV === "production") {
        (window as any).ChatAI = { init };
    } else {
        init();
    }
}
