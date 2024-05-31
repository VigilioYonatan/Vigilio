import { Request, Response, NextFunction } from "express";
import { attachMiddleware } from "../../server";
import * as z from "zod";

export function Validator<T extends z.ZodType>(schema: T) {
    return function (
        target: any,
        propertyKey: string,
        _descriptor: PropertyDescriptor
    ) {
        attachMiddleware(
            target,
            propertyKey,
            async (req: Request, res: Response, next: NextFunction) => {
                const data = await schema.safeParseAsync(req.body);
                if (!data.success) {
                    return res.status(400).json({
                        success: false,
                        message: data.error.issues[0].message,
                        body: data.error.issues[0].path[0],
                    });
                }
                req.body = data.data;
                next();
            }
        );
    };
}
