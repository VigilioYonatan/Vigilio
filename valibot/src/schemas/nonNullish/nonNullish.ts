import type {
    BaseSchema,
    BaseSchemaAsync,
    ErrorMessage,
    Input,
    Output,
} from "../../types";
import { getSchemaIssues } from "../../utils";
/**
 * Non nullish type.
 */
export type NonNullish<T> = T extends null | undefined ? never : T;
/**
 * Non nullish schema type.
 */
export type NonNullishSchema<
    TWrapped extends BaseSchema,
    TOutput = NonNullish<Output<TWrapped>>
> = BaseSchema<NonNullish<Input<TWrapped>>, TOutput> & {
    type: "non_nullish";
    wrapped: TWrapped;
};
/**
 * Non nullish schema async type.
 */
export type NonNullishSchemaAsync<
    TWrapped extends BaseSchema | BaseSchemaAsync,
    TOutput = NonNullish<Output<TWrapped>>
> = BaseSchemaAsync<NonNullish<Input<TWrapped>>, TOutput> & {
    type: "non_nullish";
    wrapped: TWrapped;
};

/**
 * Creates an async non nullish schema.
 *
 * @param wrapped The wrapped schema.
 * @param error The error message.
 *
 * @returns An async non nullish schema.
 */
export function nonNullish<TWrapped extends BaseSchema | BaseSchemaAsync>(
    wrapped: TWrapped,
    error?: ErrorMessage
): NonNullishSchemaAsync<TWrapped> {
    return {
        /**
         * The schema type.
         */
        type: "non_nullish",

        /**
         * The wrapped schema.
         */
        wrapped,

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
            // Allow `null` and `undefined` values not to pass
            if (input === null || input === undefined) {
                return getSchemaIssues(
                    info,
                    "type",
                    "non_nullish",
                    error || "Este campo debe ser no nullish.",
                    input
                );
            }

            // Return result of wrapped schema
            return wrapped._parse(input, info);
        },
    };
}
