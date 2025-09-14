import type { BaseSchema, BaseSchemaAsync, Output } from "../../types";
import type { DefaultValue } from "./types.js";
/**
 * Schema with maybe default type.
 */
export type SchemaWithMaybeDefault<TSchema extends BaseSchema = BaseSchema> =
    TSchema & { getDefault?: () => Output<TSchema> };

/**
 * Schema with maybe default async type.
 */
export type SchemaWithMaybeDefaultAsync<
    TSchema extends BaseSchemaAsync = BaseSchemaAsync
> = TSchema & { getDefault?: () => Promise<Output<TSchema>> };

/**
 * Returns the default value of the schema.
 *
 * @param schema The schema to get the default value from.
 *
 * @returns The default value.
 */
export async function getDefault<
    TSchema extends SchemaWithMaybeDefault | SchemaWithMaybeDefaultAsync
>(schema: TSchema): Promise<DefaultValue<TSchema>> {
    return schema.getDefault?.();
}
