import type {
    BaseSchema,
    BaseSchemaAsync,
    ErrorMessage,
    PipeAsync,
} from "../../types";
import { executePipe, getDefaultArgs, getSchemaIssues } from "../../utils";

/**
 * Special schema type.
 */
export type SpecialSchema<TInput, TOutput = TInput> = BaseSchema<
    TInput,
    TOutput
> & {
    type: "special";
};
/**
 * Special schema async type.
 */
export type SpecialSchemaAsync<TInput, TOutput = TInput> = BaseSchemaAsync<
    TInput,
    TOutput
> & {
    type: "special";
};

/**
 * Creates an async special schema.
 *
 * @param check The type check function.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async special schema.
 */
export function special<TInput>(
    check: (input: unknown) => boolean | Promise<boolean>,
    pipe?: PipeAsync<TInput>
): SpecialSchemaAsync<TInput>;

/**
 * Creates a special schema.
 *
 * @param check The type check function.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns A special schema.
 */
export function special<TInput>(
    check: (input: unknown) => boolean | Promise<boolean>,
    error?: ErrorMessage,
    pipe?: PipeAsync<TInput>
): SpecialSchemaAsync<TInput>;

export function special<TInput>(
    check: (input: unknown) => boolean | Promise<boolean>,
    arg2?: PipeAsync<TInput> | ErrorMessage,
    arg3?: PipeAsync<TInput>
): SpecialSchemaAsync<TInput> {
    // Get error and pipe argument
    const [error, pipe] = getDefaultArgs(arg2, arg3);

    // Create and return string schema
    return {
        /**
         * The schema type.
         */
        type: "special",

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
            if (!(await check(input))) {
                return getSchemaIssues(
                    info,
                    "type",
                    "special",
                    error || "Invalid type",
                    input
                );
            }

            // Execute pipe and return result
            return executePipe(input as TInput, pipe, info, "special");
        },
    };
}
