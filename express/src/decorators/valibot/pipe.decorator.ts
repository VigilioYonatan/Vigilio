import { Request, Response, NextFunction } from "express";
import { ObjectSchemaAsync, safeParseAsync } from "@vigilio/valibot";
import { attachMiddleware } from "../../server/express";
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
                    let message: string | null = null;
                    try {
                        message =
                            JSON.parse(
                                (data as any).issues[0].message
                            ) instanceof Array
                                ? (req as any).t(
                                      ...JSON.parse(
                                          (data as any).issues[0].message
                                      )
                                  )
                                : (data as any).issues[0].message;
                    } catch (error) {
                        message = (data as any).issues[0].message;
                    }

                    return res.status(400).json({
                        success: false,
                        message,
                        body: (data as any).issues[0].path
                            ? (data as any).issues[0].path[0].key
                            : (data as any).issues[0].validation,
                    });
                }
                req.params = data.data;
                next();
            }
        );
    };
}
