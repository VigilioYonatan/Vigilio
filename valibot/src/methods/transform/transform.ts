import type {
    BaseSchema,
    BaseSchemaAsync,
    Input,
    Output,
    ParseInfo,
    PipeAsync,
    _ParseResult,
} from "../../types";
import { executePipe } from "../../utils/executePipe/executePipe";

/**
 * Schema with transform async type.
 */
export type SchemaWithTransformAsync<
    TSchema extends BaseSchema | BaseSchemaAsync,
    TOutput
> = Omit<TSchema, "async" | "_parse" | "_types"> & {
    async: true;
    _parse(input: unknown, info?: ParseInfo): Promise<_ParseResult<TOutput>>;
    _types?: {
        input: Input<TSchema>;
        output: TOutput;
    };
};

/**
 * Adds an async transformation step to a schema, which is executed at the end
 * of parsing and can change the output type.
 *
 * @param schema The schema to be used.
 * @param action The transformation action.
 * @param pipe A validation pipe.
 *
 * @returns A transformed schema.
 */
export function transform<
    TSchema extends BaseSchema | BaseSchemaAsync,
    TOutput
>(
    schema: TSchema,
    action: (value: Output<TSchema>) => TOutput | Promise<TOutput>,
    pipe?: PipeAsync<TOutput>
): SchemaWithTransformAsync<TSchema, TOutput>;

/**
 * Adds an async transformation step to a schema, which is executed at the end
 * of parsing and can change the output type.
 *
 * @param schema The schema to be used.
 * @param action The transformation action.
 * @param validate A validation schema.
 *
 * @returns A transformed schema.
 */
export function transform<
    TSchema extends BaseSchema | BaseSchemaAsync,
    TOutput
>(
    schema: TSchema,
    action: (value: Output<TSchema>) => TOutput | Promise<TOutput>,
    validate?: BaseSchema<TOutput> | BaseSchemaAsync<TOutput>
): SchemaWithTransformAsync<TSchema, TOutput>;

export function transform<
    TSchema extends BaseSchema | BaseSchemaAsync,
    TOutput
>(
    schema: TSchema,
    action: (value: Output<TSchema>) => TOutput | Promise<TOutput>,
    arg1?: PipeAsync<TOutput> | BaseSchema<TOutput> | BaseSchemaAsync<TOutput>
): SchemaWithTransformAsync<TSchema, TOutput> {
    return {
        ...schema,

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
            // Parse input with schema
            const result = await schema._parse(input, info);

            // If there are issues, return them
            if (result.issues) {
                return result;
            }

            // Otherwise, transform output
            const output = await action(result.output);

            // Validate output with schema if available
            if (arg1 && !Array.isArray(arg1)) {
                return arg1._parse(output, info);
            }

            // Otherwise, return pipe result
            return executePipe(
                output,
                arg1 as PipeAsync<TOutput>,
                info,
                typeof output
            );
        },
    };
}
