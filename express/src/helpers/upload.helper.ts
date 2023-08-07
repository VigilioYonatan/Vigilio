import { File } from "formidable";
import fs from "node:fs";
import path from "node:path";
import { generateId } from ".";

export interface ValidationProps {
    typeFile?: {
        value: string[];
        message?: string;
    };

    minSize?:
        | {
              value: number;
              message?: string;
          }
        | number;
    maxSize?:
        | {
              value: number;
              message?: string;
          }
        | number;
    required?:
        | {
              value: boolean;
              message?: string;
          }
        | boolean;
    maxFiles?:
        | {
              value: number;
              message?: string;
          }
        | number;
    minFiles?:
        | {
              value: number;
              message?: string;
          }
        | number;
}

/**
 *
 * @param archivos
 * @param validation
 * @default  
 * maxFiles = 1,
    minFiles = 1,
    maxSize = 5,
    minSize = 0,
    typeFile = {
        value: ["image/jpg", "image/jpeg", "image/png", "image/webp"],
    },
    required = true,
 */
export function validateUpload(archivos: File[], validation?: ValidationProps) {
    return new Promise((res, rej) => {
        const {
            maxFiles = 1,
            minFiles = 1,
            maxSize = 5,
            minSize = 0,
            typeFile = {
                value: ["image/jpg", "image/jpeg", "image/png", "image/webp"],
            },
            required = true,
        } = validation || {
            minSize: 0,
            maxSize: 5,
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
            rej(
                maxFiles.message ||
                    `Demasiados archivos, máximo ${maxFiles.value} archivos`
            );
            return;
        }
        if (typeof maxFiles === "number" && archivos.length > maxFiles) {
            rej(`Demasiados archivos, máximo ${maxFiles} archivos`);
            return;
        }
        if (minFiles instanceof Object && archivos.length < minFiles.value) {
            rej(
                minFiles.message ||
                    `Demasiados archivos, máximo ${minFiles.value} archivos`
            );
            return;
        }
        if (typeof minFiles === "number" && archivos.length > minFiles) {
            rej(`Demasiados archivos, máximo ${minFiles} archivos`);
            return;
        }

        for (const archivo of archivos) {
            const extension = archivo.originalFilename!.split(".").at(-1);
            const nameArchivo =
                archivo.originalFilename!.length > 18
                    ? archivo.originalFilename?.slice(0, 16) + "..." + extension
                    : archivo.originalFilename;
            if (
                typeFile instanceof Object &&
                !typeFile.value.includes(archivo.mimetype!)
            ) {
                rej(
                    typeFile.message ||
                        `Extension de este archivo no es permitido ${nameArchivo} - solo permitidios ${JSON.stringify(
                            typeFile.value
                        )}`
                );
                return;
            }

            const mb = 1000000;

            if (
                minSize instanceof Object &&
                archivo.size < minSize.value * mb
            ) {
                rej(
                    minSize.message ||
                        `archivo demasiado pequeño: ${nameArchivo}, min ${minSize.value}MB`
                );
                return;
            }
            if (typeof minSize === "number" && archivo.size < minSize * mb) {
                rej(
                    `archivo demasiado pequeño: ${nameArchivo}, min ${minSize}MB`
                );
                return;
            }

            if (
                maxSize instanceof Object &&
                archivo.size > maxSize.value * mb
            ) {
                rej(
                    maxSize.message ||
                        `archivo demasiado pequeño: ${nameArchivo}, min ${maxSize.value}MB`
                );
                return;
            }

            if (typeof maxSize === "number" && archivo.size > maxSize * mb) {
                rej(
                    `archivo demasiado pesado: ${nameArchivo}, max ${maxSize}MB`
                );
                return;
            }
        }
        res(archivos);
    });
}
