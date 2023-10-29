import { Request, Response, NextFunction } from "express";
import { attachMiddleware } from "@decorators/express";
import {
    ObjectSchemaAsync,
    ObjectShapeAsync,
    safeParseAsync,
    strictAsync,
} from "valibot";
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function Pipe<T extends ObjectShapeAsync>(schema: ObjectSchemaAsync<T>) {
    return function (
        target: unknown,
        propertyKey: string,
        _descriptor: PropertyDescriptor
    ) {
        attachMiddleware(
            target,
            propertyKey,
            async (req: Request, res: Response, next: NextFunction) => {
                const schemas = strictAsync(schema);
                const data = await safeParseAsync(schemas, req.params);

                if (!data.success) {
                    return res.status(400).json({
                        success: false,
                        message: data.error.issues[0].message,
                        // biome-ignore lint/style/noNonNullAssertion: <explanation>
                        params: data.error.issues[0].path![0].key,
                    });
                }
                next();
            }
        );
    };
}
