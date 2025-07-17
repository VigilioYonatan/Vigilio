import { NextFunction, Request, Response } from "express";
import { vite } from "./vite";
import { formatDate, isActive } from "../helpers/helpers";
import { Web } from "./app";
import { astro } from "./astro";
import cache from "../cache";
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
                if (
                    !process.env.VITE_VIGILIO_TOKEN ||
                    !process.env.VITE_VIGILIO_WEB
                )
                    return res.send(
                        `<span>Falta variables de entorno</span> <a href="${process.env.VIGILIO_WEB}">Vigilio services</a>`
                    );
                let data = JSON.parse(cache.get("data") ?? "null");
                if (!data) {
                    const vigilio = await fetch(
                        `${process.env.VITE_VIGILIO_WEB}/api/webs/${process.env.VITE_VIGILIO_TOKEN}`
                    );
                    const responseV: Web = await vigilio.json();
                    if (
                        !responseV ||
                        !responseV.success ||
                        responseV.web.token !==
                            process.env.VITE_VIGILIO_TOKEN ||
                        !responseV.web.enabled
                    ) {
                        return res.send(
                            `<div style="background-color:#1F1F1F;width:100%;height:100vh;display:flex;justify-content:center;align-items:center;color:white;padding:0;margin:0;"><span>Comunicarse con</span> <a style="margin-left:1rem;" href="${process.env.VITE_VIGILIO_WEB}">Vigilio services</a>`
                        );
                    }
                    const clean = responseV.web.technologies.map((tech) => {
                        const { technology, ...rest } = tech as any;
                        return {
                            ...rest,
                        };
                    });
                    data = { ...responseV.web, technologies: clean };
                    const hours = 24;
                    const seconds = hours * 3600 * 1000;
                    cache.set("data", JSON.stringify(data), seconds);
                }
                req.$web = data;
            }
        } catch (err) {}
        res.locals.vite = vites;

        next();
    };
}
export { astro };
