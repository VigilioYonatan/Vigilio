import { Request, Response, NextFunction } from "express";
import { attachMiddleware } from "@decorators/express";
import { safeParseAsync, ObjectSchemaAsync } from "valibot";

export function Validator(schema: ObjectSchemaAsync<any>) {
    return function (
        target: any,
        propertyKey: string,
        _descriptor: PropertyDescriptor
    ) {
        attachMiddleware(
            target,
            propertyKey,
            async (req: Request, res: Response, next: NextFunction) => {
                const data = await safeParseAsync(schema, req.body);
                if (!data.success) {
                    return res.status(400).json({
                        success: false,
                        message: data.issues[0].message,
                        body: data.issues[0].path
                            ? data.issues[0].path[0].key
                            : data.issues[0].validation,
                    });
                }
                req.body = data.data;
                next();
            }
        );
    };
}
