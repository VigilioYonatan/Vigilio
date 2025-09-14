import type {
    ObjectEntriesAsync,
    ObjectSchemaAsync,
} from "../../schemas/object/index.ts";
import { getOutput } from "../../utils";

/**
 * Creates an object schema that strips unknown keys.
 *
 * @deprecated Use `objectAsync` without `rest` argument instead.
 *
 * @param schema A object schema.
 *
 * @returns A object schema.
 */
export function strip<
    TSchema extends ObjectSchemaAsync<ObjectEntriesAsync, undefined>
>(schema: TSchema): TSchema {
    // Create cached keys
    let cachedKeys: string[];

    // Create and return object schema
    return {
        ...schema,

        /**
         * Parses unknown input based on its schema.
         *
         * @param input The input to be parsed.
         * @param info The parse info.
         *
         * @returns The parsed output.
         */
        async _parse(input, info) {
            // Get parse result of schema
            const result = await schema._parse(input, info);

            // Return result if there are issues
            if (result.issues) {
                return result;
            }

            // Cache object keys lazy
            cachedKeys = cachedKeys || Object.keys(schema.entries);

            // Strip unknown keys
            const output: Record<string, any> = {};
            for (const key of cachedKeys) {
                output[key] = result.output[key];
            }

            // Return stripped output
            return getOutput(output);
        },
    };
}
