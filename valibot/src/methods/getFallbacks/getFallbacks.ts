import type {
    ObjectEntries,
    ObjectEntriesAsync,
    ObjectSchema,
    ObjectSchemaAsync,
    TupleItems,
    TupleItemsAsync,
    TupleSchema,
    TupleSchemaAsync,
} from "../../schemas";
import type { BaseSchema, BaseSchemaAsync } from "../../types";
import type {
    SchemaWithMaybeFallback,
    SchemaWithMaybeFallbackAsync,
} from "../getFallback/getFallback.js";
import type { FallbackValues } from "./types.js";

/**
 * Returns the fallback values of the schema.
 *
 * Hint: The difference to `getFallbackAsync` is that for objects and tuples
 * without an explicit fallback value, this function recursively returns the
 * fallback values of the subschemas instead of `undefined`.
 *
 * @param schema The schema to get the fallback values from.
 *
 * @returns The fallback values.
 */
export async function getFallbacks<
    TSchema extends
        | SchemaWithMaybeFallback<
              | BaseSchema
              | ObjectSchema<ObjectEntries, any>
              | TupleSchema<TupleItems, any>
          >
        | SchemaWithMaybeFallbackAsync<
              | BaseSchemaAsync
              | ObjectSchemaAsync<ObjectEntriesAsync, any>
              | TupleSchemaAsync<TupleItemsAsync, any>
          >
>(schema: TSchema): Promise<FallbackValues<TSchema>> {
    // Create fallbacks variable
    let fallbacks: any;

    // If schema has a fallback, set its value
    if (schema.getFallback) {
        fallbacks = await schema.getFallback();

        // Otherwise, check if schema is of kind object or tuple
    } else if ("type" in schema) {
        if (schema.type === "object") {
            fallbacks = {};
            await Promise.all(
                Object.entries(schema.entries).map(async ([key, schema]) => {
                    fallbacks[key] = await getFallbacks(schema);
                })
            );

            // If it is a tuple schema, set array with fallback value of each item
        } else if (schema.type === "tuple") {
            fallbacks = await Promise.all(
                schema.items.map((schema) => getFallbacks(schema))
            );
        }
    }

    // Return fallback values
    return fallbacks;
}
