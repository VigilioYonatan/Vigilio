import type { ObjectSchema, ObjectSchemaAsync } from "../../schemas";

/**
 * Object keys type.
 */
export type ObjectKeys<
    TSchema extends ObjectSchema<any, any> | ObjectSchemaAsync<any, any>
> = [keyof TSchema["entries"], ...(keyof TSchema["entries"])[]];
