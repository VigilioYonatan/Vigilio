import { createApp, defineAsyncComponent } from "vue";
import "../css/index.css";

// const pinia = createPinia()
for (const el of document.getElementsByClassName("vue-app")) {
    const app = createApp({
        components: {
            LoginForm: defineAsyncComponent(
                () => import("./services/auth/components/LoginForm.vue")
            ),
            Socket: defineAsyncComponent(() => import("./services/Socket.vue")),
        },
    });
    app.mount(el);
}
