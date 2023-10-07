import { h } from "./helpers";
import ReactDOM from 'react-dom/client';

function reactComponent(children: React.ReactNode) {
    const div = h("div");
    ReactDOM.createRoot(div).render(children);
    return div;
}
export default reactComponent;
