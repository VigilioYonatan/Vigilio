import type { BaseSchema, BaseSchemaAsync, PipeAsync } from "../../types";
import { executePipe } from "../../utils";
/**
 * Unknown schema type.
 */
export type UnknownSchema<TOutput = unknown> = BaseSchema<unknown, TOutput> & {
    type: "unknown";
};

/**
 * Unknown schema async type.
 */
export type UnknownSchemaAsync<TOutput = unknown> = BaseSchemaAsync<
    unknown,
    TOutput
> & {
    type: "unknown";
};

/**
 * Creates an async unknown schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async unknown schema.
 */
export function unknown(pipe: PipeAsync<unknown> = []): UnknownSchemaAsync {
    return {
        /**
         * The schema type.
         */
        type: "unknown",

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
            return executePipe(input, pipe, info, "unknown");
        },
    };
}
