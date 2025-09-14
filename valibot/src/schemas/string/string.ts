import type {
    BaseSchema,
    BaseSchemaAsync,
    ErrorMessage,
    PipeAsync,
} from "../../types";
import { executePipe, getDefaultArgs, getSchemaIssues } from "../../utils";

/**
 * String schema type.
 */
export type StringSchema<TOutput = string> = BaseSchema<string, TOutput> & {
    type: "string";
};

/**
 * String schema async type.
 */
export type StringSchemaAsync<TOutput = string> = BaseSchemaAsync<
    string,
    TOutput
> & {
    type: "string";
};

/**
 * Creates an async string schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async string schema.
 */
export function string(pipe?: PipeAsync<string>): StringSchemaAsync;

/**
 * Creates an async string schema.
 *
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async string schema.
 */
export function string(
    error?: ErrorMessage,
    pipe?: PipeAsync<string>
): StringSchemaAsync;

export function string(
    arg1?: ErrorMessage | PipeAsync<string>,
    arg2?: PipeAsync<string>
): StringSchemaAsync {
    // Get error and pipe argument
    const [error, pipe] = getDefaultArgs(arg1, arg2);

    // Create and return async string schema
    return {
        /**
         * The schema type.
         */
        type: "string",

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
            if (typeof input !== "string") {
                return getSchemaIssues(
                    info,
                    "type",
                    "string",
                    error || "Este campo es obligatorio.",
                    input
                );
            }

            // Execute pipe and return result
            return executePipe(input, pipe, info, "string");
        },
    };
}
