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
    SchemaWithMaybeDefault,
    SchemaWithMaybeDefaultAsync,
} from "../getDefault/getDefault.js";
import type { DefaultValues } from "./types.js";

/**
 * Returns the default values of the schema.
 *
 * The difference to `getDefaultAsync` is that for objects and tuples without
 * an explicit default value, this function recursively returns the default
 * values of the subschemas instead of `undefined`.
 *
 * @param schema The schema to get the default values from.
 *
 * @returns The default values.
 */
export async function getDefaults<
    TSchema extends
        | SchemaWithMaybeDefault<
              | BaseSchema
              | ObjectSchema<ObjectEntries, any>
              | TupleSchema<TupleItems, any>
          >
        | SchemaWithMaybeDefaultAsync<
              | BaseSchemaAsync
              | ObjectSchemaAsync<ObjectEntriesAsync, any>
              | TupleSchemaAsync<TupleItemsAsync, any>
          >
>(schema: TSchema): Promise<DefaultValues<TSchema>> {
    // Create defaults variable
    let defaults: any;

    // If schema contains a default function, set its default value
    if (schema.getDefault) {
        defaults = await schema.getDefault();

        // Otherwise, check if schema is of kind object or tuple
    } else if ("type" in schema) {
        // If it is an object schema, set object with default value of each entry
        if (schema.type === "object") {
            defaults = {};
            for (const key in schema.entries) {
                defaults[key] = await getDefaults(schema.entries[key]);
            }

            // If it is a tuple schema, set array with default value of each item
        } else if (schema.type === "tuple") {
            defaults = [];
            for (let key = 0; key < schema.items.length; key++) {
                defaults.push(await getDefaults(schema.items[key]));
            }
        }
    }

    // Return default values
    return defaults;
}
