import { terser } from "rollup-plugin-terser";
import vue from "rollup-plugin-vue";
import typescript from "rollup-plugin-typescript2";

export default {
    // Otras opciones de configuración de Rollup...
    input: "src/index.ts",
    output: {
        file: "dist/bundle.js", // Ruta al archivo de salida del paquete
        format: "cjs", // Formato del paquete (puedes cambiarlo según tus necesidades)
        name: "@vigilio/preact-fetching", // Nombre de tu biblioteca Vue
        globals: {
            vue: "Vue", // Mapeo de las dependencias externas (en este caso, Vue)
        },
    },
    plugins: [
        // Otros plugins...
        vue(),
        terser(),
        typescript({
            tsconfig: "tsconfig.json", // Ruta al archivo tsconfig.json
        }),
    ],
    external: ["vue"], // Indica que Vue es una dependencia externa
};
