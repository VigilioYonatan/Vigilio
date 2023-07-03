import preact from "rollup-plugin-preact";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
export default {
    // Otras opciones de configuración de Rollup...
    input: "src/index.ts",
    output: {
        file: "dist/bundle.js", // Ruta al archivo de salida del paquete
        format: "umd",
        name: "@vigilio/preact-fetching",
        globals: {
            preact: "preact", // Mapeo de las dependencias externas (en este caso, Preact)
        },
    },
    plugins: [
        // Otros plugins...
        preact(),
        terser(),
        typescript({
            tsconfig: "tsconfig.json", // Ruta al archivo tsconfig.json
        }),
    ],
    external: ["preact"], // Indica que Vue es una dependencia externa
};
