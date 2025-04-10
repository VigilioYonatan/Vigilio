import { defineConfig } from "vite";
import { resolve } from "node:path";
import cssnano from "cssnano";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import MillionLint from "@million/lint";
import preact from "@preact/preset-vite";

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.tsx"),
            name: "vigilio-chat-ai",
            fileName: (format) => `vigilio-chat-ai.${format}.js`,
        },
        minify: "esbuild",
        sourcemap: false,
    },
    css: {
        postcss: {
            plugins: [cssnano()],
        },
    },
    plugins: [cssInjectedByJsPlugin(), preact()],
});
