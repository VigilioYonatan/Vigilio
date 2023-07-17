"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpload = void 0;
const node_fs_1 = __importDefault(require("node:fs"));
const node_path_1 = __importDefault(require("node:path"));
const _1 = require(".");
function validateUpload(archivos, validation) {
    return new Promise((res, rej) => {
        var _a;
        const { maxFiles = 1, minFiles = 1, maxSize = 1, minSize = 0.001, typeFile = {
            value: ["image/jpg", "image/jpeg", "image/png", "image/webp"],
        }, required = true, } = validation || {
            minSize: 0.001,
            maxSize: 1,
            maxFiles: 1,
            minFiles: 1,
            required: true,
            typeFile: {
                value: ["image/jpg", "image/jpeg", "image/png", "image/webp"],
            },
        };
        if (!archivos && required) {
            rej("Este campo es obligatorio");
            return;
        }
        if (maxFiles instanceof Object && archivos.length > maxFiles.value) {
            rej(maxFiles.message ||
                `Demasiados archivos, máximo ${maxFiles.value} archivos`);
            return;
        }
        if (typeof maxFiles === "number" && archivos.length > maxFiles) {
            rej(`Demasiados archivos, máximo ${maxFiles} archivos`);
            return;
        }
        if (minFiles instanceof Object && archivos.length < minFiles.value) {
            rej(minFiles.message ||
                `Demasiados archivos, máximo ${minFiles.value} archivos`);
            return;
        }
        if (typeof minFiles === "number" && archivos.length > minFiles) {
            rej(`Demasiados archivos, máximo ${minFiles} archivos`);
            return;
        }
        let filesNames = [];
        for (const archivo of archivos) {
            const extension = archivo.originalFilename.split(".").at(-1);
            const nameArchivo = archivo.originalFilename.length > 18
                ? ((_a = archivo.originalFilename) === null || _a === void 0 ? void 0 : _a.slice(0, 16)) + "..." + extension
                : archivo.originalFilename;
            if (typeFile instanceof Object &&
                !typeFile.value.includes(archivo.mimetype)) {
                rej(typeFile.message ||
                    `Extension de este archivo no es permitido ${nameArchivo} - solo permitidios ${JSON.stringify(typeFile.value)}`);
                return;
            }
            const mb = 1000000;
            if (minSize instanceof Object &&
                archivo.size < minSize.value * mb) {
                rej(minSize.message ||
                    `archivo demasiado pequeño: ${nameArchivo}, min ${minSize.value}MB`);
                return;
            }
            if (typeof minSize === "number" && archivo.size < minSize * mb) {
                rej(`archivo demasiado pequeño: ${nameArchivo}, min ${minSize}MB`);
                return;
            }
            if (maxSize instanceof Object &&
                archivo.size > maxSize.value * mb) {
                rej(maxSize.message ||
                    `archivo demasiado pequeño: ${nameArchivo}, min ${maxSize.value}MB`);
                return;
            }
            if (typeof maxSize === "number" && archivo.size > maxSize * mb) {
                rej(`archivo demasiado pesado: ${nameArchivo}, max ${maxSize}MB`);
                return;
            }
            const readArchivo = node_fs_1.default.readFileSync(archivo.filepath);
            const nameFiles = (0, _1.generateId)() + "." + extension;
            node_fs_1.default.writeFileSync(node_path_1.default.resolve(__dirname, "..", "..", "uploads", nameFiles), readArchivo);
            filesNames = [...filesNames, nameFiles];
        }
        res(filesNames);
    });
}
exports.validateUpload = validateUpload;
