import { Request, Response, NextFunction } from "express";
import { attachMiddleware } from "@decorators/express";
import * as z from "zod";

export function Pipe<T extends z.ZodRawShape>(cb: (zod: typeof z) => T) {
    return function (
        target: any,
        propertyKey: string,
        _descriptor: PropertyDescriptor
    ) {
        attachMiddleware(
            target,
            propertyKey,
            async (req: Request, res: Response, next: NextFunction) => {
                const params = await z
                    .object(cb(z))
                    .strict()
                    .safeParseAsync(req.params);
                if (!params.success) {
                    return res.status(400).json({
                        success: false,
                        message: params.error.issues[0].message,
                        param: params.error.issues[0].path[0],
                    });
                }
                req.params = params.data;
                next();
            }
        );
    };
}
