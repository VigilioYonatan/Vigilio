import type { BaseSchema, BaseSchemaAsync, ErrorMessage } from "../../types";
import { getSchemaIssues, getOutput } from "../../utils";

/**
 * NaN schema type.
 */
export type NanSchema<TOutput = number> = BaseSchema<number, TOutput> & {
    type: "nan";
};

/**
 * NaN schema async type.
 */
export type NanSchemaAsync<TOutput = number> = BaseSchemaAsync<
    number,
    TOutput
> & {
    type: "nan";
};

/**
 * Creates an async NaN schema.
 *
 * @param error The error message.
 *
 * @returns An async NaN schema.
 */
export function nan(error?: ErrorMessage): NanSchemaAsync {
    return {
        /**
         * The schema type.
         */
        type: "nan",

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
            if (!Number.isNaN(input)) {
                return getSchemaIssues(
                    info,
                    "type",
                    "nan",
                    error || "Este campo solo permite nan.",
                    input
                );
            }

            // Return input as output
            return getOutput(input as number);
        },
    };
}
