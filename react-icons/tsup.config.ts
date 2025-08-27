import { defineConfig } from "tsup";

export default defineConfig({
    entry: {
        index: "src/index.ts",
        fontawesome: "src/fontawesome/index.ts",
    }, // Punto de entrada principal
    format: ["esm", "cjs"], // Genera ambos formatos para mejor compatibilidad
    dts: true, // Genera archivos de tipos TypeScript
    sourcemap: false, // Opcional: para debugging
    clean: true, // Limpia el directorio de salida antes de construir
    minify: true, // Minifica el código (opcional para producción)
    treeshake: true, // Habilita tree shaking (activado por defecto en producción)
    splitting: true, // Habilita code splitting (mejor para tree shaking)
    external: ["react", "react-dom"],
});
