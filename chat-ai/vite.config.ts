import { defineConfig } from "vite";
import { resolve } from "node:path";
import cssnano from "cssnano";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import MillionLint from "@million/lint";
import preact from "@preact/preset-vite";
import million from "million/compiler";
import dts from "vite-plugin-dts";

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "src/index.tsx"),
            name: "vigilio-chat-ai",
            fileName: (format) => `vigilio-chat-ai.${format}.js`,
            formats: ["es", "umd"],
        },
        minify: "esbuild",
        sourcemap: false,
    },
    css: {
        postcss: {
            plugins: [cssnano()],
        },
    },
    plugins: [
        cssInjectedByJsPlugin(),
        preact(),
        million.vite({ auto: true }),
        dts({
            insertTypesEntry: true, // Adds types to the package.json
            include: ["src"],
        }),
    ],
});
