import { Request, Response, NextFunction } from "express";
import { attachMiddleware } from "@decorators/express";
import { ObjectSchemaAsync, safeParseAsync } from "valibot";
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function Pipe(schema: ObjectSchemaAsync<any>) {
    return function (
        target: unknown,
        propertyKey: string,
        _descriptor: PropertyDescriptor
    ) {
        attachMiddleware(
            target,
            propertyKey,
            async (req: Request, res: Response, next: NextFunction) => {
                const data = await safeParseAsync(schema, req.params);

                if (!data.success) {
                    return res.status(400).json({
                        success: false,
                        message: data.error.issues[0].message,
                        // biome-ignore lint/style/noNonNullAssertion: <explanation>
                        params: data.error.issues[0].path![0].key,
                    });
                }
                req.params = data.data;
                next();
            }
        );
    };
}
