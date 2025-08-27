const fs = require("fs");
const path = require("path");

function generateIconIndexFile(
    iconsDir,
    outputFile = "index.ts",
    suffix = "Icon"
) {
    try {
        // Leer todos los archivos .tsx en el directorio
        const files = fs.readdirSync(iconsDir);
        const iconComponents = files.filter(
            (file) =>
                file.endsWith(".tsx") &&
                !file.endsWith(".stories.tsx") &&
                file !== "index.ts" &&
                !file.startsWith("_") // Excluir archivos que comiencen con _
        );

        if (iconComponents.length === 0) {
            console.log(
                "ℹ️ No se encontraron componentes de iconos en el directorio"
            );
            return;
        }

        // Generar contenido del archivo index.ts
        let exports = "";
        let defaultExports = "";

        iconComponents.forEach((file) => {
            const componentName = path.basename(file, ".tsx");
            const exportName = `${componentName}${suffix}`;

            // Exportación nombrada individual
            exports += `export { default as ${exportName} } from './${componentName}';\n`;

            // Para la exportación por defecto como objeto
            defaultExports += `  ${exportName},\n`;
        });

        const content = `// Archivo generado automáticamente - no modificar manualmente
${exports}
// Exportación por defecto de todos los iconos como objeto
const icons = {
${defaultExports}};

export default icons;
`;

        // Escribir el archivo index.ts
        const indexPath = path.join(iconsDir, outputFile);
        fs.writeFileSync(indexPath, content);

        console.log(
            `✅ Archivo index.ts generado con ${iconComponents.length} iconos exportados`
        );
    } catch (error) {
        console.error(
            "❌ Error al generar el archivo index.ts:",
            error.message
        );
    }
}

// Uso: node generate-icon-index.js <directorio-de-iconos> [suffix]
const [iconsDir, suffix] = process.argv.slice(2);

if (!iconsDir) {
    console.log(
        "Uso: node generate-icon-index.js <directorio-de-iconos> [suffix]"
    );
    process.exit(1);
}

generateIconIndexFile(iconsDir, "index.ts", suffix || "Icon");
