import { Request, Response, NextFunction } from "express";
import { attachMiddleware } from "@decorators/express";
import { File, IncomingForm } from "formidable";
import { ValidationProps, validateUpload } from "../helpers/upload.helper";

export function Upload(validation?: ValidationProps) {
    return function (
        target: any,
        propertyKey: string,
        _descriptor: PropertyDescriptor
    ) {
        attachMiddleware(
            target,
            propertyKey,
            async (req: Request, res: Response, next: NextFunction) => {
                const form = new IncomingForm();
                form.parse(req, async (err, _fields, files) => {
                    if (err) {
                        return res.status(500).json({
                            success: false,
                            message:
                                "Error en el sistema, dirigase al desarrollador",
                        });
                    }
                    const archivos = files.file as File[];
                    try {
                        (req as any).files = await validateUpload(
                            archivos,
                            validation
                        );
                        next();
                    } catch (err) {
                        return res
                            .status(400)
                            .json({ success: false, message: err });
                    }
                });
            }
        );
    };
}
