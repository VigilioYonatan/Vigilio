import type {
    BaseSchema,
    BaseSchemaAsync,
    ErrorMessage,
    PipeAsync,
} from "../../types";
import { executePipe, getDefaultArgs, getSchemaIssues } from "../../utils";
/**
 * Boolean schema type.
 */
export type BooleanSchema<TOutput = boolean> = BaseSchema<boolean, TOutput> & {
    type: "boolean";
};

/**
 * Boolean schema async type.
 */
export type BooleanSchemaAsync<TOutput = boolean> = BaseSchemaAsync<
    boolean,
    TOutput
> & {
    type: "boolean";
};

/**
 * Creates an async boolean schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async boolean schema.
 */
export function boolean(pipe?: PipeAsync<boolean>): BooleanSchemaAsync;

/**
 * Creates an async boolean schema.
 *
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async boolean schema.
 */
export function boolean(
    error?: ErrorMessage,
    pipe?: PipeAsync<boolean>
): BooleanSchemaAsync;

export function boolean(
    arg1?: ErrorMessage | PipeAsync<boolean>,
    arg2?: PipeAsync<boolean>
): BooleanSchemaAsync {
    // Get error and pipe argument
    const [error, pipe] = getDefaultArgs(arg1, arg2);

    // Create and return async boolean schema
    return {
        /**
         * The schema type.
         */
        type: "boolean",

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
            if (typeof input !== "boolean") {
                return getSchemaIssues(
                    info,
                    "type",
                    "boolean",
                    error ||
                        "Este campo solo permite booleanos (verdado o falso).",
                    input
                );
            }

            // Execute pipe and return result
            return executePipe(input, pipe, info, "boolean");
        },
    };
}
