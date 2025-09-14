import type { BaseSchemaAsync, Output } from "../../types";
import { getOutput } from "../../utils";
import type { FallbackInfo } from "./types.js";

/**
 * Schema with fallback async type.
 */
export type SchemaWithFallbackAsync<
    TSchema extends BaseSchemaAsync = BaseSchemaAsync,
    TFallback extends Output<TSchema> = Output<TSchema>
> = TSchema & { getFallback: (info?: FallbackInfo) => Promise<TFallback> };

/**
 * Returns a fallback value when validating the passed schema failed.
 *
 * @param schema The schema to catch.
 * @param fallback The fallback value.
 *
 * @returns The passed schema.
 */
export function fallback<
    TSchema extends BaseSchemaAsync,
    TFallback extends Output<TSchema>
>(
    schema: TSchema,
    fallback:
        | TFallback
        | ((info?: FallbackInfo) => TFallback | Promise<TFallback>)
): SchemaWithFallbackAsync<TSchema, TFallback> {
    return {
        ...schema,

        /**
         * Returns the default value.
         */
        async getFallback(info) {
            return typeof fallback === "function"
                ? await (
                      fallback as (
                          info?: FallbackInfo
                      ) => TFallback | Promise<TFallback>
                  )(info)
                : (fallback as TFallback);
        },

        /**
         * Parses unknown input based on its schema.
         *
         * @param input The input to be parsed.
         * @param info The parse info.
         *
         * @returns The parsed output.
         */
        async _parse(input, info) {
            const result = await schema._parse(input, info);
            return getOutput(
                result.issues
                    ? await this.getFallback({ input, issues: result.issues })
                    : result.output
            );
        },
    };
}
