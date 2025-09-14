import type { BaseSchema, BaseSchemaAsync, PipeAsync } from "../../types";
import { executePipe } from "../../utils";

/**
 * Any schema type.
 */
export type AnySchema<TOutput = any> = BaseSchema<any, TOutput> & {
    type: "any";
};
/**
 * Any schema type.
 */
export type AnySchemaAsync<TOutput = any> = BaseSchemaAsync<any, TOutput> & {
    type: "any";
};

/**
 * Creates an async any schema.
 *
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async any schema.
 */
export function any(pipe: PipeAsync<any> = []): AnySchemaAsync {
    return {
        /**
         * The schema type.
         */
        type: "any",

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
            return executePipe(input, pipe, info, "any");
        },
    };
}
