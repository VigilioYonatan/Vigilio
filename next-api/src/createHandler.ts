import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { findRoute } from "./internals/findRoute";
import { getCallerInfo } from "./internals/getCallerInfo";
import { getParams } from "./internals/getParams";
import { notFound } from "./internals/notFound";
import { parseRequestUrl } from "./internals/parseRequestUrl";
import { Container } from "./decorators/injectable.decorator";

/**
 * Prepares a router for the given class.
 *
 * @param cls Router class
 * @params isDinamic: true, will be dynamic, false read directories or files about pages api
 * @example
 * ```ts
 * import { createHandler, Get } from 'next-api-decorators';
 *
 * class Events {
 *  Get()
 *  public events() {
 *    return DB.findEvents();
 *  }
 * }
 *
 * export default createHandler(Events);
 * ```
 */
export function createHandler(
    classes: (new (...args: any[]) => any)[],
    isDinamic = false
): NextApiHandler {
    const instances = classes.map((cls) => Container.provide(cls));

    return (req: NextApiRequest, res: NextApiResponse) => {
        if (!req.url || !req.method) {
            return notFound(req, res);
        }

        for (const instance of instances) {
            const [directory, fileName] = getCallerInfo();

            const path = parseRequestUrl(req, isDinamic, directory, fileName);

            const cls = instance.constructor;
            const [keys, match, method] = findRoute(cls, req.method, path);

            if (method) {
                const methodFn = instance[method.propertyKey];
                if (methodFn) {
                    (req as any).params = getParams(keys, match);
                    return methodFn.call(instance, req, res);
                }
            }
        }

        return notFound(req, res);
    };
}
