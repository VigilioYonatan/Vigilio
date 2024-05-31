import type { RouterOptions } from "express";

import type { Type } from "../types";
import { type ExpressClass, type ExpressMeta, getMeta } from "../meta";
import type { Middleware } from "../middleware";
import { Injectable } from "@decorators/di";

/**
 * Registers controller for base url
 */
export function Controller(
    url: string,
    middleware?: Middleware[]
): ClassDecorator;
export function Controller(
    url: string,
    routerOptions?: RouterOptions,
    middleware?: Middleware[]
): ClassDecorator;
export function Controller(
    url: string,
    middlewareOrRouterOptions?: Middleware[] | RouterOptions,
    middleware: Middleware[] = []
) {
    return (target: Type) => {
        const meta: ExpressMeta = getMeta(target.prototype as ExpressClass);

        meta.url = url;
        meta.middleware = Array.isArray(middlewareOrRouterOptions)
            ? middlewareOrRouterOptions
            : middleware;
        (meta as any).routerOptions = Array.isArray(middlewareOrRouterOptions)
            ? null
            : middlewareOrRouterOptions;

        Injectable()(target);
    };
}
