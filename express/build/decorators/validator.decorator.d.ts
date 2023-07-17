import * as z from "zod";
export declare function Validator<T extends z.ZodType>(schema: T): (target: any, propertyKey: string, _descriptor: PropertyDescriptor) => void;
