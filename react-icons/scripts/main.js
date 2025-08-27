const fs = require("fs");
const path = require("path");

function convertSvgToTsx(svgFilePath, outputDir) {
    try {
        const svgContent = fs.readFileSync(svgFilePath, "utf8");
        const fileName = path.basename(svgFilePath, ".svg");

        // Convertir nombre-del-archivo a NombreDelArchivoIcon
        let componentName =
            fileName
                .split("-")
                .map((word, index) => {
                    // Convertir a PascalCase
                    return word.charAt(0).toUpperCase() + word.slice(1);
                })
                .join("") + "Icon";

        // Si el nombre comienza con número, agregar prefijo "Icon"
        if (/^\d/.test(componentName)) {
            componentName = "Number" + componentName;
        }

        // Limpiar el SVG
        let cleanedSvg = svgContent
            .replace(/<\?xml[^>]+\?>/, "")
            .replace(/<!DOCTYPE[^>]+>/, "")
            .replace(/<!--.*?-->/gs, "")
            .replace(/fill="[^"]*"/g, (match) =>
                match.includes("none") ? 'fill="none"' : ""
            )
            .replace(/stroke="[^"]*"/g, "")
            .replace(/class=/g, "className=")
            .trim();

        // Convertir estilos CSS normales a sintaxis JSX
        cleanedSvg = cleanedSvg.replace(
            /<style>(.*?)<\/style>/gs,
            (match, styleContent) => {
                // Limpiar y formatear el contenido CSS
                const cleanedStyle = styleContent
                    .replace(/\/\*.*?\*\//g, "") // Eliminar comentarios
                    .trim();
                return `<style>{\`${cleanedStyle}\`}</style>`;
            }
        );

        // Manejar específicamente las etiquetas de estilo jsx
        cleanedSvg = cleanedSvg.replace(
            /<style jsx>\{`([^`]*)`\}<\/style>/gs,
            (match, styleContent) => {
                return `<style jsx>{\`${styleContent}\`}</style>`;
            }
        );

        // Añadir props de React y mejorar el formato del SVG
        cleanedSvg = cleanedSvg
            .replace(/<svg([^>]*)>/, `<svg$1\n            {...props}>`)
            .replace(/<svg[^>]*>/, (match) => {
                // Asegurar que tenga xmlns si no está presente
                if (!match.includes("xmlns=")) {
                    match = match.replace(
                        "<svg",
                        '<svg xmlns="http://www.w3.org/2000/svg"'
                    );
                }
                // Agregar el estilo con minWidth
                if (!match.includes("style=")) {
                    match = match.replace(
                        "<svg",
                        `<svg style={{ minWidth: props.width, ...props.style } as React.CSSProperties}`
                    );
                }
                return `${match}\n            {props.title ? <title>{props.title}</title> : <title> </title>}`;
            });

        // Crear el contenido del componente TSX
        const tsxContent = `import React from 'react';\n\nfunction ${componentName}(props: React.SVGProps<SVGSVGElement> & { title?: string }) {
    return (
        ${cleanedSvg.replace(/\n/g, "\n        ")}
    );
}\n\nexport default ${componentName};`;

        // Crear directorio de salida si no existe
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        // Escribir el archivo TSX
        const outputPath = path.join(outputDir, `${componentName}.tsx`);
        fs.writeFileSync(outputPath, tsxContent);

        console.log(`✅ Convertido: ${fileName}.svg -> ${componentName}.tsx`);
        return true;
    } catch (error) {
        console.error(`❌ Error al convertir ${svgFilePath}:`, error.message);
        return false;
    }
}
function processSvgDirectory(inputDir, outputDir) {
    try {
        console.log(`📂 Procesando directorio: ${inputDir}`);

        // Leer todos los archivos del directorio
        const files = fs.readdirSync(inputDir);
        let successCount = 0;
        let errorCount = 0;

        files.forEach((file) => {
            if (path.extname(file).toLowerCase() === ".svg") {
                const svgPath = path.join(inputDir, file);
                const result = convertSvgToTsx(svgPath, outputDir);

                if (result) {
                    successCount++;
                } else {
                    errorCount++;
                }
            }
        });

        console.log(`\n🎉 Conversión completada:`);
        console.log(`✅ ${successCount} archivos convertidos exitosamente`);
        if (errorCount > 0) {
            console.log(`❌ ${errorCount} archivos con errores`);
        }

        return { success: successCount, errors: errorCount };
    } catch (error) {
        console.error(
            `❌ Error al procesar el directorio ${inputDir}:`,
            error.message
        );
        return { success: 0, errors: 1 };
    }
}

// Manejo de argumentos de línea de comandos
const [inputPath, outputDir] = process.argv.slice(2);

if (!inputPath || !outputDir) {
    console.log(
        "Uso: node svg-to-tsx.js <directorio-svg> <directorio-salida-tsx>"
    );
    console.log("Ejemplo: node svg-to-tsx.js ./svg ./src/components/icons");
    process.exit(1);
}

// Verificar si la ruta de entrada existe
if (!fs.existsSync(inputPath)) {
    console.error(`❌ El directorio de entrada no existe: ${inputPath}`);
    process.exit(1);
}

// Procesar el directorio
processSvgDirectory(inputPath, outputDir);
