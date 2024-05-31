import { Request, Response, NextFunction } from "express";
import { attachMiddleware } from "../../server";
import * as z from "zod";
import path from "node:path";

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
                let zodImport = z;
                try {
                    zodImport = (
                        await import(
                            path.resolve(process.cwd(), "app", "lib", "lang.ts")
                        )
                    ).default;
                } catch (error) {}

                const params = await zodImport
                    .object(cb(zodImport))
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
