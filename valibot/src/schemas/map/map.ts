import type {
    BaseSchema,
    BaseSchemaAsync,
    ErrorMessage,
    Issues,
    Output,
    PipeAsync,
} from "../../types";
import {
    executePipe,
    getDefaultArgs,
    getIssues,
    getSchemaIssues,
} from "../../utils";
import type { MapInput, MapOutput, MapPathItem } from "./types";

/**
 * Map schema type.
 */
export type MapSchema<
    TKey extends BaseSchema,
    TValue extends BaseSchema,
    TOutput = MapOutput<TKey, TValue>
> = BaseSchema<MapInput<TKey, TValue>, TOutput> & {
    type: "map";
    key: TKey;
    value: TValue;
};
/**
 * Map schema async type.
 */
export type MapSchemaAsync<
    TKey extends BaseSchema | BaseSchemaAsync,
    TValue extends BaseSchema | BaseSchemaAsync,
    TOutput = MapOutput<TKey, TValue>
> = BaseSchemaAsync<MapInput<TKey, TValue>, TOutput> & {
    type: "map";
    key: TKey;
    value: TValue;
};

/**
 * Creates an async map schema.
 *
 * @param key The key schema.
 * @param value The value schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async map schema.
 */
export function map<
    TKey extends BaseSchema | BaseSchemaAsync,
    TValue extends BaseSchema | BaseSchemaAsync
>(
    key: TKey,
    value: TValue,
    pipe?: PipeAsync<MapOutput<TKey, TValue>>
): MapSchemaAsync<TKey, TValue>;

/**
 * Creates an async map schema.
 *
 * @param key The key schema.
 * @param value The value schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async map schema.
 */
export function map<
    TKey extends BaseSchema | BaseSchemaAsync,
    TValue extends BaseSchema | BaseSchemaAsync
>(
    key: TKey,
    value: TValue,
    error?: ErrorMessage,
    pipe?: PipeAsync<MapOutput<TKey, TValue>>
): MapSchemaAsync<TKey, TValue>;

export function map<
    TKey extends BaseSchema | BaseSchemaAsync,
    TValue extends BaseSchema | BaseSchemaAsync
>(
    key: TKey,
    value: TValue,
    arg3?: PipeAsync<MapOutput<TKey, TValue>> | ErrorMessage,
    arg4?: PipeAsync<MapOutput<TKey, TValue>>
): MapSchemaAsync<TKey, TValue> {
    // Get error and pipe argument
    const [error, pipe] = getDefaultArgs(arg3, arg4);

    // Create and return async map schema
    return {
        /**
         * The schema type.
         */
        type: "map",

        /**
         * The key schema.
         */
        key,

        /**
         * The  value schema.
         */
        value,

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
            if (!(input instanceof Map)) {
                return getSchemaIssues(
                    info,
                    "type",
                    "map",
                    error || "Este campo es obligatorio.",
                    input
                );
            }

            // Create issues and output
            const output: Map<Output<TKey>, Output<TValue>> = new Map();
            let issues: Issues | undefined;

            // Parse each key and value by schema
            await Promise.all(
                Array.from(input.entries()).map(
                    async ([inputKey, inputValue]) => {
                        // Create path item variable
                        let pathItem: MapPathItem | undefined;

                        // Get parse result of key and value
                        const [keyResult, valueResult] = await Promise.all(
                            (
                                [
                                    {
                                        schema: key,
                                        value: inputKey,
                                        origin: "key",
                                    },
                                    {
                                        schema: value,
                                        value: inputValue,
                                        origin: "value",
                                    },
                                ] as const
                            ).map(async ({ schema, value, origin }) => {
                                // If not aborted early, continue execution
                                if (!(info?.abortEarly && issues)) {
                                    // Get parse result of value
                                    const result = await schema._parse(value, {
                                        origin,
                                        abortEarly: info?.abortEarly,
                                        abortPipeEarly: info?.abortPipeEarly,
                                        skipPipe: info?.skipPipe,
                                    });

                                    // If not aborted early, continue execution
                                    if (!(info?.abortEarly && issues)) {
                                        // If there are issues, capture them
                                        if (result.issues) {
                                            // Create map path item
                                            pathItem = pathItem || {
                                                type: "map",
                                                input,
                                                key: inputKey,
                                                value: inputValue,
                                            };

                                            // Add modified result issues to issues
                                            for (const issue of result.issues) {
                                                if (issue.path) {
                                                    issue.path.unshift(
                                                        pathItem
                                                    );
                                                } else {
                                                    issue.path = [pathItem];
                                                }
                                                issues?.push(issue);
                                            }
                                            if (!issues) {
                                                issues = result.issues;
                                            }

                                            // If necessary, abort early
                                            if (info?.abortEarly) {
                                                throw null;
                                            }

                                            // Otherwise, return parse result
                                        } else {
                                            return result;
                                        }
                                    }
                                }
                            })
                        ).catch(() => []);

                        // Set entry if there are no issues
                        if (keyResult && valueResult) {
                            output.set(keyResult.output, valueResult.output);
                        }
                    }
                )
            );

            // Return issues or pipe result
            return issues
                ? getIssues(issues)
                : executePipe(input, pipe, info, "map");
        },
    };
}
