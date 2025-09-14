import type { BaseSchema, BaseSchemaAsync, Output } from "../../types";
import type { FallbackInfo } from "../fallback/types.js";
import type { FallbackValue } from "./types.js";
/**
 * Schema with maybe fallback type.
 */
export type SchemaWithMaybeFallback<TSchema extends BaseSchema = BaseSchema> =
    TSchema & { getFallback?: (info?: FallbackInfo) => Output<TSchema> };

/**
 * Schema with maybe fallback async type.
 */
export type SchemaWithMaybeFallbackAsync<
    TSchema extends BaseSchemaAsync = BaseSchemaAsync
> = TSchema & {
    getFallback?: (info?: FallbackInfo) => Promise<Output<TSchema>>;
};

/**
 * Returns the fallback value of the schema.
 *
 * @param schema The schema to get the fallback value from.
 * @param info The fallback info.
 *
 * @returns The fallback value.
 */
export async function getFallback<
    TSchema extends SchemaWithMaybeFallback | SchemaWithMaybeFallbackAsync
>(schema: TSchema, info?: FallbackInfo): Promise<FallbackValue<TSchema>> {
    return schema.getFallback?.(info);
}
