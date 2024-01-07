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
                    const message =
                        JSON.parse(data.issues[0].message) instanceof Array
                            ? (req as any).t(
                                  ...JSON.parse(data.issues[0].message)
                              )
                            : data.issues[0].message;
                    return res.status(400).json({
                        success: false,
                        message,
                        body: data.issues[0].path
                            ? data.issues[0].path[0].key
                            : data.issues[0].validation,
                    });
                }
                req.params = data.data;
                next();
            }
        );
    };
}
