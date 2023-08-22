import { NextFunction, Request, Response } from "express";
import { vite } from "./vite";
import { formatDate, isActive } from "../helpers/helpers";
interface Client {
    file?: string;
    port?: number;
    host?: string;
}
export function client(props?: Client) {
    const {
        file = "ts/main.ts",
        port = Number(process.env.VITE_PORT) || 3000,
        host = process.env.VITE_URL || "http://localhost:4000",
    } = props || {
        file: "ts/main.ts",
        host: process.env.VITE_URL || "http://localhost:4000",
        port: Number(process.env.VITE_PORT) || 3000,
    };
    return async (req: Request, res: Response, next: NextFunction) => {
        let vites = null;

        const route = (uri: string) => `${host}${uri}`;
        res.locals.vite = vites;
        res.locals.route = route;
        res.locals.formatDate = formatDate;
        res.locals.isActive = isActive(req);
        try {
            vites = await vite(file, "http://localhost:" + port);
        } catch (err) {}
        next();
    };
}
