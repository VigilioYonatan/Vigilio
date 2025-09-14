import type {
    BaseSchema,
    BaseSchemaAsync,
    ErrorMessage,
    PipeAsync,
} from "../../types";
import { executePipe, getDefaultArgs, getSchemaIssues } from "../../utils";
/**
 * Date schema type.
 */
export type DateSchema<TOutput = Date> = BaseSchema<Date, TOutput> & {
    type: "date";
};

/**
 * Date schema async type.
 */
export type DateSchemaAsync<TOutput = Date> = BaseSchemaAsync<Date, TOutput> & {
    type: "date";
};

/**
 * Creates an async date schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async date schema.
 */
export function date(pipe?: PipeAsync<Date>): DateSchemaAsync;

/**
 * Creates an async date schema.
 *
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async date schema.
 */
export function date(
    error?: ErrorMessage,
    pipe?: PipeAsync<Date>
): DateSchemaAsync;

export function date(
    arg1?: ErrorMessage | PipeAsync<Date>,
    arg2?: PipeAsync<Date>
): DateSchemaAsync {
    // Get error and pipe argument
    const [error, pipe] = getDefaultArgs(arg1, arg2);

    // Create and return async date schema
    return {
        /**
         * The schema type.
         */
        type: "date",

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
            if (!(input instanceof Date) || isNaN(input.getTime())) {
                return getSchemaIssues(
                    info,
                    "type",
                    "date",
                    error || "Este campo solo permite fechas.",
                    input
                );
            }

            // Execute pipe and return result
            return executePipe(input, pipe, info, "date");
        },
    };
}
