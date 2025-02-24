import { NextApiRequest, NextApiResponse } from "next";
import {
    createMiddlewareDecorator,
    NextFunction,
} from "./middleware.decorators";
import formidable, { type File } from "formidable";

export const Upload = () =>
    createMiddlewareDecorator(
        async (
            req: NextApiRequest,
            res: NextApiResponse,
            next: NextFunction
        ) => {
            const form = formidable();

            try {
                const [fields, files] = await form.parse(req);
                const archivos = files.file;
                (req as any).files = archivos;
                if (fields.name) {
                    (req as any).filesName = fields.name[0];
                }
                next();
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    message: "Error en el sistema, dirigase al desarrollador",
                });
            }
        }
    )();

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
export function validateUpload(archivos: File[], val: ValidationProps) {
    const {
        typeFile = {
            value: [
                "image/jpg",
                "image/jpeg",
                "image/png",
                "image/webp",
                "image/gif",
            ],
        },
        ...validation
    } = val || {
        typeFile: {
            value: [
                "image/jpg",
                "image/jpeg",
                "image/png",
                "image/webp",
                "image/gif",
            ],
        },
    };

    return new Promise((res, rej) => {
        console.log({ archivos });

        if (!archivos && validation.required) {
            return rej("Este campo es obligatorio");
        }

        if (
            archivos &&
            validation.maxFiles instanceof Object &&
            archivos.length > validation.maxFiles.value
        ) {
            return rej(
                validation.maxFiles.message ||
                    `Demasiados archivos, máximo ${validation.maxFiles.value} archivos`
            );
        }
        if (
            archivos &&
            typeof validation.maxFiles === "number" &&
            archivos.length > validation.maxFiles
        ) {
            return rej(
                `Demasiados archivos, máximo ${validation.maxFiles} archivos`
            );
        }
        if (
            archivos &&
            validation.minFiles instanceof Object &&
            archivos.length < validation.minFiles.value
        ) {
            return rej(
                validation.minFiles.message ||
                    `Demasiados archivos, máximo ${validation.minFiles.value} archivos`
            );
        }
        if (
            archivos &&
            typeof validation.minFiles === "number" &&
            archivos.length < validation.minFiles
        ) {
            return rej(
                `Demasiados archivos, máximo ${validation.minFiles} archivos`
            );
        }
        if (archivos) {
            for (const archivo of archivos) {
                const extension = archivo.originalFilename!.split(".").at(-1);
                const nameArchivo =
                    archivo.originalFilename!.length > 18
                        ? archivo.originalFilename?.slice(0, 16) +
                          "..." +
                          extension
                        : archivo.originalFilename;

                if (
                    typeFile instanceof Object &&
                    !typeFile.value.includes(archivo.mimetype!)
                ) {
                    return rej(
                        typeFile.message ||
                            `Extension de este archivo no es permitido ${nameArchivo} - solo permitidios ${JSON.stringify(
                                typeFile.value
                            )}`
                    );
                }

                const mb = 1000000;

                if (
                    validation.minSize instanceof Object &&
                    archivo.size < validation.minSize.value * mb
                ) {
                    return rej(
                        validation.minSize.message ||
                            `archivo demasiado pequeño: ${nameArchivo}, min ${validation.minSize.value}MB`
                    );
                }
                if (
                    typeof validation.minSize === "number" &&
                    archivo.size < validation.minSize * mb
                ) {
                    return rej(
                        `archivo demasiado pequeño: ${nameArchivo}, min ${validation.minSize}MB`
                    );
                }

                if (
                    validation.maxSize instanceof Object &&
                    archivo.size > validation.maxSize.value * mb
                ) {
                    return rej(
                        validation.maxSize.message ||
                            `archivo demasiado pequeño: ${nameArchivo}, min ${validation.maxSize.value}MB`
                    );
                }

                if (
                    typeof validation.maxSize === "number" &&
                    archivo.size > validation.maxSize * mb
                ) {
                    return rej(
                        `archivo demasiado pesado: ${nameArchivo}, max ${validation.maxSize}MB`
                    );
                }
            }
        }

        return res(archivos);
    });
}
