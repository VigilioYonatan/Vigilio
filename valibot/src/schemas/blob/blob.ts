import type { BaseSchema, BaseSchemaAsync, ErrorMessage, PipeAsync } from "../../types";
import { executePipe, getDefaultArgs, getSchemaIssues } from "../../utils";
/**
 * Blob schema type.
 */
export type BlobSchema<TOutput = Blob> = BaseSchema<Blob, TOutput> & {
    type: "blob";
};
/**
 * Blob schema async type.
 */
export type BlobSchemaAsync<TOutput = Blob> = BaseSchemaAsync<Blob, TOutput> & {
    type: "blob";
};

/**
 * Creates an async blob schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async blob schema.
 */
export function blob(pipe?: PipeAsync<Blob>): BlobSchemaAsync;

/**
 * Creates an async blob schema.
 *
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async blob schema.
 */
export function blob(
    error?: ErrorMessage,
    pipe?: PipeAsync<Blob>
): BlobSchemaAsync;

export function blob(
    arg1?: ErrorMessage | PipeAsync<Blob>,
    arg2?: PipeAsync<Blob>
): BlobSchemaAsync {
    // Get error and pipe argument
    const [error, pipe] = getDefaultArgs(arg1, arg2);

    // Create and return async blob schema
    return {
        /**
         * The schema type.
         */
        type: "blob",

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
            if (!(input instanceof Blob)) {
                return getSchemaIssues(
                    info,
                    "type",
                    "blob",
                    error || "Este campo solo permite blobs.",
                    input
                );
            }

            // Execute pipe and return result
            return executePipe(input, pipe, info, "blob");
        },
    };
}
