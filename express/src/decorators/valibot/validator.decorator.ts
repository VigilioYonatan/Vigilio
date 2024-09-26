import { Request, Response, NextFunction } from "express";
import { safeParseAsync, ObjectSchemaAsync } from "@vigilio/valibot";
import { attachMiddleware } from "../../server/express/express";

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
                req.body = data.data;
                next();
            }
        );
    };
}
