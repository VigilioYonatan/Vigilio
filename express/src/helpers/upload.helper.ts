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
export function validateUpload(archivos: File[], validation: ValidationProps) {
    return new Promise((res, rej) => {
        if (!archivos && validation.required) {
            rej("Este campo es obligatorio");
            return;
        }

        if (
            validation.maxFiles instanceof Object &&
            archivos.length > validation.maxFiles.value
        ) {
            rej(
                validation.maxFiles.message ||
                    `Demasiados archivos, máximo ${validation.maxFiles.value} archivos`
            );
            return;
        }
        if (
            typeof validation.maxFiles === "number" &&
            archivos.length > validation.maxFiles
        ) {
            rej(`Demasiados archivos, máximo ${validation.maxFiles} archivos`);
            return;
        }
        if (
            validation.minFiles instanceof Object &&
            archivos.length < validation.minFiles.value
        ) {
            rej(
                validation.minFiles.message ||
                    `Demasiados archivos, máximo ${validation.minFiles.value} archivos`
            );
            return;
        }
        if (
            typeof validation.minFiles === "number" &&
            archivos.length > validation.minFiles
        ) {
            rej(`Demasiados archivos, máximo ${validation.minFiles} archivos`);
            return;
        }

        for (const archivo of archivos) {
            const extension = archivo.originalFilename!.split(".").at(-1);
            const nameArchivo =
                archivo.originalFilename!.length > 18
                    ? archivo.originalFilename?.slice(0, 16) + "..." + extension
                    : archivo.originalFilename;
            if (
                validation.typeFile instanceof Object &&
                !validation.typeFile.value.includes(archivo.mimetype!)
            ) {
                rej(
                    validation.typeFile.message ||
                        `Extension de este archivo no es permitido ${nameArchivo} - solo permitidios ${JSON.stringify(
                            validation.typeFile.value
                        )}`
                );
                return;
            }

            const mb = 1000000;

            if (
                validation.minSize instanceof Object &&
                archivo.size < validation.minSize.value * mb
            ) {
                rej(
                    validation.minSize.message ||
                        `archivo demasiado pequeño: ${nameArchivo}, min ${validation.minSize.value}MB`
                );
                return;
            }
            if (
                typeof validation.minSize === "number" &&
                archivo.size < validation.minSize * mb
            ) {
                rej(
                    `archivo demasiado pequeño: ${nameArchivo}, min ${validation.minSize}MB`
                );
                return;
            }

            if (
                validation.maxSize instanceof Object &&
                archivo.size > validation.maxSize.value * mb
            ) {
                rej(
                    validation.maxSize.message ||
                        `archivo demasiado pequeño: ${nameArchivo}, min ${validation.maxSize.value}MB`
                );
                return;
            }

            if (
                typeof validation.maxSize === "number" &&
                archivo.size > validation.maxSize * mb
            ) {
                rej(
                    `archivo demasiado pesado: ${nameArchivo}, max ${validation.maxSize}MB`
                );
                return;
            }
        }
        res(archivos);
    });
}
