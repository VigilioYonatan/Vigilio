import "./assets/index.css";
import ChatButton from "./components/ChatButton";
import { render } from "preact";

function init(_: { height: number } | undefined = undefined) {
    return render(<ChatButton />, document.body);
}
init();
// if (typeof window !== "undefined") {
//     (window as any).ChatAI = { init };
// }
