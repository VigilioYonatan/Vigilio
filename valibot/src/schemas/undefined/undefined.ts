import type { BaseSchema, BaseSchemaAsync, ErrorMessage } from "../../types";
import { getSchemaIssues, getOutput } from "../../utils";

/**
 * Undefined schema type.
 */
export type UndefinedSchema<TOutput = undefined> = BaseSchema<
    undefined,
    TOutput
> & {
    type: "undefined";
};
/**
 * Undefined schema async type.
 */
export type UndefinedSchemaAsync<TOutput = undefined> = BaseSchemaAsync<
    undefined,
    TOutput
> & {
    type: "undefined";
};

/**
 * Creates an async undefined schema.
 *
 * @param error The error message.
 *
 * @returns An async undefined schema.
 */
export function undefined(error?: ErrorMessage): UndefinedSchemaAsync {
    return {
        /**
         * The schema type.
         */
        type: "undefined",

        /**
         * Whether it's async.
         */
        async: true,

        /**
         * Parses unknown input based on its schema.
         *
         * @param input The input to be parsed.
         * @param info The parse info.
         *
         * @returns The parsed output.
         */
        async _parse(input, info) {
            // Check type of input
            if (typeof input !== "undefined") {
                return getSchemaIssues(
                    info,
                    "type",
                    "undefined",
                    error || "Este campo es obligatorio.",
                    input
                );
            }

            // Return input as output
            return getOutput(input);
        },
    };
}

/**
 * See {@link undefinedAsync}
 *
 * @deprecated Use `undefinedAsync` instead.
 */
export const undefinedTypeAsync = undefined;
