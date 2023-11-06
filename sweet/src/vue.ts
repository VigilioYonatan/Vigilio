import { createApp } from "vue";
import { h } from "./helpers";
export const vueComponent: typeof createApp = (rootComponent, rootProps) => {
    const div = h("div");
    const app = createApp(rootComponent, rootProps);
    app.mount(div);
    return div as unknown as any;
};
