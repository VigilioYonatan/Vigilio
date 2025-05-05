import type { Request, Response } from "express";

export function escapeQuotes(str: string): string {
    return str.replace(/"/g, '\\"');
}

/**
 *  html json strifidy
 */
export function escapeForHtmlAttribute(json: string) {
    return json
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&apos;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

/**
 *  parser props
 */
export function propsToString(props: Record<string, unknown>): string {
    return Object.entries(props)
        .map(([key, value]) => {
            if (typeof value === "string") {
                return `${key}="${escapeQuotes(value)}"`; // ecape
            }
            return `:${key}="${escapeForHtmlAttribute(JSON.stringify(value))}"`;
        })
        .join(" ");
}

export function render(
    req: Request,
    res: Response,
    props: {
        lang?: string;
        head?: string;
        scripts?: string;
        props: Record<string, unknown>;
    }
) {
    // clean texts y convert tagss
    const pathJs = req.originalUrl.endsWith("/")
        ? `${req.originalUrl.slice(0, -1)}index`
        : req.originalUrl.replaceAll("/", "-");

    return `<html lang="${props.lang || "es"}">
                <head>
                    ${props.head || ""}
                    ${res.locals.vite}
                </head>
                <body>
                    <${pathJs} ${propsToString(props.props || {})}></${pathJs}>
                    ${props.scripts || ""}
                </body>
            </html>`;
}
