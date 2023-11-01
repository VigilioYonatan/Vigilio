import { Request, Response, NextFunction } from "express";
import { attachMiddleware } from "@decorators/express";
import {
    safeParseAsync,
    strictAsync,
    ObjectShapeAsync,
    ObjectSchemaAsync,
} from "valibot";

export function Validator<T extends ObjectShapeAsync>(
    schema: ObjectSchemaAsync<T>
) {
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
                        message: data.error.issues[0].message,
                        // biome-ignore lint/style/noNonNullAssertion: <explanation>
                        body: data.error.issues[0].path![0].key,
                    });
                }
                req.body = data.data;
                next();
            }
        );
    };
}
