import { NextFunction, Request, Response } from "express";
import { vite } from "./vite";
interface Client {
    file?: string;
    port?: number;
    host?: string;
}
export function client(props?: Client) {
    const {
        file = "main.ts",
        port = 3000,
        host = "http://localhost:4000",
    } = props || {
        file: "ts/main.ts",
        host: "http://localhost:4000",
        port: 3000,
    };
    return async (_req: Request, res: Response, next: NextFunction) => {
        const vites = await vite(file, "http://localhost:" + port);
        const route = (uri: string) => `${host}${uri}`;
        res.locals.vite = vites;
        res.locals.route = route;
        next();
    };
}
