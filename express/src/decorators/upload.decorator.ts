import { Request, Response, NextFunction } from "express";
import formidable, { File } from "formidable";
import { attachMiddleware } from "../server/express";

export function Upload() {
    return function (
        target: any,
        propertyKey: string,
        _descriptor: PropertyDescriptor
    ) {
        attachMiddleware(
            target,
            propertyKey,
            (req: Request, res: Response, next: NextFunction) => {
                const form = formidable();
                form.parse(req, async (err, fields, files) => {
                    if (err) {
                        return res.status(500).json({
                            success: false,
                            message:
                                "Error en el sistema, dirigase al desarrollador",
                        });
                    }
                    const archivos = files.file as File[];
                    (req as any).files = archivos;
                    if (fields.name) {
                        (req as any).filesName = fields.name[0];
                    }
                    next();
                });
            }
        );
    };
}
