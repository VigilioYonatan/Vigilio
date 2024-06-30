import type {
    BaseSchema,
    BaseSchemaAsync,
    ErrorMessage,
    Input,
    Output,
} from "../../types";
import { getSchemaIssues } from "../../utils";
import type { NonNullable } from "./nonNullable.js";

/**
 * Non nullable schema async type.
 */
export type NonNullableSchemaAsync<
    TWrapped extends BaseSchema | BaseSchemaAsync,
    TOutput = NonNullable<Output<TWrapped>>
> = BaseSchemaAsync<NonNullable<Input<TWrapped>>, TOutput> & {
    type: "non_nullable";
    wrapped: TWrapped;
};

/**
 * Creates an async non nullable schema.
 *
 * @param wrapped The wrapped schema.
 * @param error The error message.
 *
 * @returns An async non nullable schema.
 */
export function nonNullableAsync<TWrapped extends BaseSchema | BaseSchemaAsync>(
    wrapped: TWrapped,
    error?: ErrorMessage
): NonNullableSchemaAsync<TWrapped> {
    return {
        /**
         * The schema type.
         */
        type: "non_nullable",

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
            // Allow `null` values not to pass
            if (input === null) {
                return getSchemaIssues(
                    info,
                    "type",
                    "non_nullable",
                    error || "Este campo debe ser no nullable.",
                    input
                );
            }

            // Return result of wrapped schema
            return wrapped._parse(input, info);
        },
    };
}
