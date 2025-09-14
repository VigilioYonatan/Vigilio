import type {
    BaseSchema,
    BaseSchemaAsync,
    ErrorMessage,
    PipeAsync,
} from "../../types";
import { executePipe, getDefaultArgs, getSchemaIssues } from "../../utils";
/**
 * Bigint schema type.
 */
export type BigintSchema<TOutput = bigint> = BaseSchema<bigint, TOutput> & {
    type: "bigint";
};
/**
 * Bigint schema async type.
 */
export type BigintSchemaAsync<TOutput = bigint> = BaseSchemaAsync<
    bigint,
    TOutput
> & {
    type: "bigint";
};

/**
 * Creates an async bigint schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async bigint schema.
 */
export function bigint(pipe?: PipeAsync<bigint>): BigintSchemaAsync;

/**
 * Creates an async bigint schema.
 *
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async bigint schema.
 */
export function bigint(
    error?: ErrorMessage,
    pipe?: PipeAsync<bigint>
): BigintSchemaAsync;

export function bigint(
    arg1?: ErrorMessage | PipeAsync<bigint>,
    arg2?: PipeAsync<bigint>
): BigintSchemaAsync {
    // Get error and pipe argument
    const [error, pipe] = getDefaultArgs(arg1, arg2);

    // Create and return async bigint schema
    return {
        /**
         * The schema type.
         */
        type: "bigint",

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
            if (typeof input !== "bigint") {
                return getSchemaIssues(
                    info,
                    "type",
                    "bigint",
                    error ||
                        "Este campo solo permite números grandes (bigint).",
                    input
                );
            }

            // Execute pipe and return result
            return executePipe(input, pipe, info, "bigint");
        },
    };
}
