"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = exports.logger = exports.generateId = exports.customArray = void 0;
function customArray(length = 10) {
    return Array.from({ length });
}
exports.customArray = customArray;
function generateId() {
    return Date.now().toString(32) + Math.random().toString(32).substring(2);
}
exports.generateId = generateId;
exports.logger = {
    error(v) {
        console.log("\x1b[31m" + v);
    },
    success(v) {
        console.log("\x1b[32m" + v);
    },
    danger(v) {
        console.log("\x1b[33m" + v);
    },
    primary(v) {
        console.log("\x1b[34m" + v);
    },
};
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
exports.capitalize = capitalize;
