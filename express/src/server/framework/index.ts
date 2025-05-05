import { Get, Req, Res } from "../express";
import { Middleware } from "../express/middleware";
import { render } from "./template";
import type { Request, Response } from "express";
/**
 * page framework read
 */
export function Page(path: string, middlewares?: Middleware[]) {
    return (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) => {
        // 1. Register GET route
        Get(path, middlewares)(target, propertyKey, descriptor);

        // 2. Apply Req and Res decorators internally
        Req()(target, propertyKey, 0); // Injects req as first parameter
        Res()(target, propertyKey, 1); // Injects res as second parameter

        // 3. Store the original method
        const originalMethod = descriptor.value;

        // 4. Override the method
        descriptor.value = async function (...args: any[]) {
            // args[0] and args[1] now contain req and res (injected by decorators)
            const req: Request = args[0];
            const res: Response = args[1];

            // Execute original method with injected parameters
            const dynamicProps = await originalMethod.apply(this, args);

            // Render and send response
            const renderResult = render(req, res, dynamicProps || {});
            return res.send(renderResult);
        };

        return descriptor;
    };
}
