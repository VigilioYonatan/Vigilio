import type {
    BaseSchema,
    BaseSchemaAsync,
    ErrorMessage,
    Issues,
    PipeAsync,
} from "../../types";
import { executePipe, getIssues, getSchemaIssues } from "../../utils";
import type { EnumSchema, EnumSchemaAsync } from "../enum/index.js";
import type { PicklistSchema, PicklistSchemaAsync } from "../picklist/index.js";
import type { StringSchema, StringSchemaAsync } from "../string/index.js";
import type { UnionSchema, UnionSchemaAsync } from "../union/index.js";
import type { RecordInput, RecordOutput, RecordPathItem } from "./types.js";
import { getRecordArgs } from "./utils/index.js";
import { BLOCKED_KEYS } from "./values.js";
/**
 * Record key type.
 */
export type RecordKey =
    | EnumSchema<any, string | number | symbol>
    | PicklistSchema<any, string | number | symbol>
    | StringSchema<string | number | symbol>
    | UnionSchema<any, string | number | symbol>;

/**
 * Record schema type.
 */
export type RecordSchema<
    TKey extends RecordKey,
    TValue extends BaseSchema,
    TOutput = RecordOutput<TKey, TValue>
> = BaseSchema<RecordInput<TKey, TValue>, TOutput> & {
    type: "record";
    key: TKey;
    value: TValue;
};
/**
 * Record key type.
 */
export type RecordKeyAsync =
    | EnumSchema<any, string | number | symbol>
    | EnumSchemaAsync<any, string | number | symbol>
    | PicklistSchema<any, string | number | symbol>
    | PicklistSchemaAsync<any, string | number | symbol>
    | StringSchema<string | number | symbol>
    | StringSchemaAsync<string | number | symbol>
    | UnionSchema<any, string | number | symbol>
    | UnionSchemaAsync<any, string | number | symbol>;

/**
 * Record schema async type.
 */
export type RecordSchemaAsync<
    TKey extends RecordKeyAsync,
    TValue extends BaseSchema | BaseSchemaAsync,
    TOutput = RecordOutput<TKey, TValue>
> = BaseSchemaAsync<RecordInput<TKey, TValue>, TOutput> & {
    type: "record";
    key: TKey;
    value: TValue;
};

/**
 * Creates an async record schema.
 *
 * @param value The value schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async record schema.
 */
export function record<TValue extends BaseSchema | BaseSchemaAsync>(
    value: TValue,
    pipe?: PipeAsync<RecordOutput<StringSchema, TValue>>
): RecordSchemaAsync<StringSchema, TValue>;

/**
 * Creates an async record schema.
 *
 * @param value The value schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async record schema.
 */
export function record<TValue extends BaseSchema | BaseSchemaAsync>(
    value: TValue,
    error?: ErrorMessage,
    pipe?: PipeAsync<RecordOutput<StringSchema, TValue>>
): RecordSchemaAsync<StringSchema, TValue>;

/**
 * Creates an async record schema.
 *
 * @param key The key schema.
 * @param value The value schema.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async record schema.
 */
export function record<
    TKey extends RecordKeyAsync,
    TValue extends BaseSchema | BaseSchemaAsync
>(
    key: TKey,
    value: TValue,
    pipe?: PipeAsync<RecordOutput<TKey, TValue>>
): RecordSchemaAsync<TKey, TValue>;

/**
 * Creates an async record schema.
 *
 * @param key The key schema.
 * @param value The value schema.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async record schema.
 */
export function record<
    TKey extends RecordKeyAsync,
    TValue extends BaseSchema | BaseSchemaAsync
>(
    key: TKey,
    value: TValue,
    error?: ErrorMessage,
    pipe?: PipeAsync<RecordOutput<TKey, TValue>>
): RecordSchemaAsync<TKey, TValue>;

export function record<
    TKey extends RecordKeyAsync,
    TValue extends BaseSchema | BaseSchemaAsync
>(
    arg1: TValue | TKey,
    arg2?: PipeAsync<RecordOutput<TKey, TValue>> | ErrorMessage | TValue,
    arg3?: PipeAsync<RecordOutput<TKey, TValue>> | ErrorMessage,
    arg4?: PipeAsync<RecordOutput<TKey, TValue>>
): RecordSchemaAsync<TKey, TValue> {
    // Get key, value, error and pipe argument
    const [key, value, error, pipe] = getRecordArgs<
        TKey,
        TValue,
        PipeAsync<RecordOutput<TKey, TValue>>
    >(arg1, arg2, arg3, arg4);

    // Create and return async record schema
    return {
        /**
         * The schema type.
         */
        type: "record",

        /**
         * The key schema.
         */
        key,

        /**
         * The value schema.
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
            if (!input || typeof input !== "object") {
                return getSchemaIssues(
                    info,
                    "type",
                    "record",
                    error || "Este campo es obligatorio.",
                    input
                );
            }

            // Create issues and output
            let issues: Issues | undefined;
            const output: Record<string | number | symbol, any> = {};

            // Parse each key and value by schema
            await Promise.all(
                // Note: `Object.entries(...)` converts each key to a string
                Object.entries(input).map(async ([inputKey, inputValue]) => {
                    // Exclude blocked keys to prevent prototype pollutions
                    if (!BLOCKED_KEYS.includes(inputKey)) {
                        // Create path item variable
                        let pathItem: RecordPathItem | undefined;

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
                                            // Create record path item
                                            pathItem = pathItem || {
                                                type: "record",
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
                            output[keyResult.output] = valueResult.output;
                        }
                    }
                })
            );

            // Return issues or pipe result
            return issues
                ? getIssues(issues)
                : executePipe(
                      output as RecordOutput<TKey, TValue>,
                      pipe,
                      info,
                      "record"
                  );
        },
    };
}
