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
        res.locals.route = route;
        res.locals.formatDate = formatDate;
        res.locals.isActive = isActive(req);
        try {
            vites = await vite(file, "http://localhost:" + port);
            if (process.env.NODE_ENV === "production") {
                if (!process.env.VITE_VIGILIO_TOKEN || !process.env.VITE_VIGILIO_WEB)
                    return res.send(
                        `<span>Falta variables de entorno</span> <a href="${process.env.VIGILIO_WEB}">Vigilio services</a>`
                    );
                const vigilio = await fetch(
                    `${process.env.VITE_VIGILIO_WEB}/api/webs/${process.env.VITE_VIGILIO_TOKEN}`
                );
                const responseV = await vigilio.json();
                if (
                    !responseV ||
                    !responseV.success ||
                    responseV.web.key !== process.env.VITE_VIGILIO_TOKEN ||
                    responseV.web.web !== process.env.VITE_URL ||
                    !responseV.web.enabled
                ) {
                    return res.send(
                        `<span>Comunicarse con</span> <a href="${process.env.VITE_VIGILIO_WEB}">Vigilio services</a>`
                    );
                }
            }
        } catch (err) {}
        res.locals.vite = vites;

        next();
    };
}
