import { Request, Response, NextFunction } from "express";
import { attachMiddleware } from "@decorators/express";
import formidable, { File } from "formidable";
import { ValidationProps, validateUpload } from "../helpers/upload.helper";

export function Upload(validation: ValidationProps) {
    return function (
        target: any,
        propertyKey: string,
        _descriptor: PropertyDescriptor
    ) {
        attachMiddleware(
            target,
            propertyKey,
            async (req: Request, res: Response, next: NextFunction) => {
                try {
                    const { archivos, name } = (await fileConfig(
                        req,
                        validation
                    )) as unknown as { archivos: File[]; name: string | null };

                    (req as any).files = archivos;
                    (req as any).filesName = name;
                    next();
                } catch (error) {
                    return res
                        .status(400)
                        .json({ success: false, message: error });
                }
            }
        );
    };
}

function fileConfig(req: Request, validation: ValidationProps) {
    return new Promise((res, rej) => {
        const form = formidable();
        form.parse(req, async (err, fields, files) => {
            if (err) {
                return rej("Error en el sistema, dirigase al desarrollador");
            }
            const archivos = files.files as File[];
            try {
                await validateUpload(archivos, validation);
                let name = null;
                if (fields.name) {
                    name = fields.name[0];
                }
                return res({ archivos, name });
            } catch (err) {
                return rej(err);
            }
        });
    });
}
