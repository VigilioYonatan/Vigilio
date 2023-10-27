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
                    await fileConfig(req, validation);
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
                // return res.status(500).json({
                //     success: false,
                //     message: "Error en el sistema, dirigase al desarrollador",
                // });
            }
            const archivos = files.file as File[];
            try {
                await validateUpload(archivos, validation);
                (req as any).files = archivos;
                if (fields.name) {
                    (req as any).filesName = fields.name[0];
                }
                res(true);
            } catch (err) {
                return rej(err);
            }
        });
    });
}
