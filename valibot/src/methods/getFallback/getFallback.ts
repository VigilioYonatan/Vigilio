import type { BaseSchema, Output } from "../../types";
import type { FallbackInfo } from "../fallback/types.js";
import type { FallbackValue } from "./types.js";

/**
 * Schema with maybe fallback type.
 */
export type SchemaWithMaybeFallback<TSchema extends BaseSchema = BaseSchema> =
    TSchema & { getFallback?: (info?: FallbackInfo) => Output<TSchema> };

/**
 * Returns the fallback value of the schema.
 *
 * @param schema The schema to get the fallback value from.
 * @param info The fallback info.
 *
 * @returns The fallback value.
 */
export function getFallback<TSchema extends SchemaWithMaybeFallback>(
    schema: TSchema,
    info?: FallbackInfo
): FallbackValue<TSchema> {
    return schema.getFallback?.(info);
}
