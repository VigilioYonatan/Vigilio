import { Request } from "express";

export function customArray(length: number = 10) {
    return Array.from({ length });
}
export function generateId() {
    return Date.now().toString(32) + Math.random().toString(32).substring(2);
}

export const logger = {
    error(v: any) {
        console.log("\x1b[31m" + v);
    },
    success(v: any) {
        console.log("\x1b[32m" + v);
    },
    danger(v: any) {
        console.log("\x1b[33m" + v);
    },
    primary(v: any) {
        console.log("\x1b[34m" + v);
    },
};

export function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function slug(text: string) {
    const slugText = text
        .toLowerCase() // Convertir a minúsculas
        .replace(/[^\w\s-]/g, "") // Eliminar caracteres especiales, excepto guiones y espacios
        .trim() // Eliminar espacios en los extremos
        .replace(/\s+/g, "-") // Reemplazar espacios con guiones
        .replace(/--+/g, "-"); // Reemplazar múltiples guiones contiguos con solo uno
    return slugText;
}

export function formatDate(date: string, lang: string | string[] = "es-ES") {
    const fechaObjeto = new Date(date);
    const opciones: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "long",
        year: "numeric",
    };
    const formatoFecha = new Intl.DateTimeFormat(lang, opciones).format(
        fechaObjeto
    );
    return formatoFecha;
}

export function isActive(req: Request) {
    return (uri: string) => {
        return req.path === uri;
    };
}
