import * as z from "zod";
export declare function Pipe<T extends z.ZodRawShape>(cb: (zod: typeof z) => T): (target: any, propertyKey: string, _descriptor: PropertyDescriptor) => void;
