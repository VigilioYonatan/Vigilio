import { NextFunction, Request, Response } from "express";
import { formatDate, isActive } from "../helpers/helpers";
import { Web } from "./app";
interface Client {
    file?: string;
    port?: number;
    host?: string;
}
export function astro(_props?: Client) {
    return async (req: Request, res: Response, next: NextFunction) => {
        if (process.env.NODE_ENV === "production") {
            if (
                !process.env.PUBLIC_VIGILIO_TOKEN ||
                !process.env.PUBLIC_VIGILIO_WEB
            )
                return res.send(
                    `<span>Falta variables de entorno</span> <a href="https://www.vigilio-services.com">Vigilio services</a>`
                );
            const vigilio = await fetch(
                `${process.env.PUBLIC_VIGILIO_WEB}/api/webs/${process.env.PUBLIC_VIGILIO_TOKEN}`
            );
            const responseV: Web = await vigilio.json();
            if (
                !responseV ||
                !responseV.success ||
                responseV.web.token !== process.env.PUBLIC_VIGILIO_TOKEN ||
                responseV.web.url !== process.env.PUBLIC_URL ||
                !responseV.web.enabled
            ) {
                return res.send(
                    `<div style="background-color:#1F1F1F;width:100%;height:100vh;display:flex;justify-content:center;align-items:center;color:white;padding:0;margin:0;"><span>Comunicarse con</span> <a style="margin-left:1rem;" href="${process.env.PUBLIC_VIGILIO_WEB}">Vigilio services</a>`
                );
            }
            const clean = responseV.web.technologies.map((tech) => {
                const { technology, ...rest } = tech as any;
                return {
                    ...rest,
                };
            });
            req.$web = { ...responseV.web, technologies: clean };
        }
        next();
    };
}
