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
