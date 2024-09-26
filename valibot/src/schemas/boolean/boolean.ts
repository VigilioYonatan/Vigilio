import type { BaseSchema, ErrorMessage, Pipe } from "../../types";
import { executePipe, getDefaultArgs, getSchemaIssues } from "../../utils";

/**
 * Boolean schema type.
 */
export type BooleanSchema<TOutput = boolean> = BaseSchema<boolean, TOutput> & {
    type: "boolean";
};

/**
 * Creates a boolean schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns A boolean schema.
 */
export function boolean(pipe?: Pipe<boolean>): BooleanSchema;

/**
 * Creates a boolean schema.
 *
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A boolean schema.
 */
export function boolean(
    error?: ErrorMessage,
    pipe?: Pipe<boolean>
): BooleanSchema;

export function boolean(
    arg1?: ErrorMessage | Pipe<boolean>,
    arg2?: Pipe<boolean>
): BooleanSchema {
    // Get error and pipe argument
    const [error, pipe] = getDefaultArgs(arg1, arg2);

    // Create and return boolean schema
    return {
        /**
         * The schema type.
         */
        type: "boolean",

        /**
         * Whether it's async.
         */
        async: false,

        /**
         * Parses unknown input based on its schema.
         *
         * @param input The input to be parsed.
         * @param info The parse info.
         *
         * @returns The parsed output.
         */
        _parse(input, info) {
            // Check type of input
            if (typeof input !== "boolean") {
                return getSchemaIssues(
                    info,
                    "type",
                    "boolean",
                    error ||
                       "Este campo es obligatorio.",
                    input
                );
            }

            // Execute pipe and return result
            return executePipe(input, pipe, info, "boolean");
        },
    };
}
