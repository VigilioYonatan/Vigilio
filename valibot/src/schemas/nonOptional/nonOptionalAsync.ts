import type {
    BaseSchema,
    BaseSchemaAsync,
    ErrorMessage,
    Input,
    Output,
} from "../../types";
import { getSchemaIssues } from "../../utils";
import type { NonOptional } from "./nonOptional.js";

/**
 * Non optional schema async type.
 */
export type NonOptionalSchemaAsync<
    TWrapped extends BaseSchema | BaseSchemaAsync,
    TOutput = NonOptional<Output<TWrapped>>
> = BaseSchemaAsync<NonOptional<Input<TWrapped>>, TOutput> & {
    type: "non_optional";
    wrapped: TWrapped;
};

/**
 * Creates an async non optional schema.
 *
 * @param wrapped The wrapped schema.
 * @param error The error message.
 *
 * @returns An async non optional schema.
 */
export function nonOptionalAsync<TWrapped extends BaseSchema | BaseSchemaAsync>(
    wrapped: TWrapped,
    error?: ErrorMessage
): NonOptionalSchemaAsync<TWrapped> {
    return {
        /**
         * The schema type.
         */
        type: "non_optional",

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
            // Allow `undefined` values not to pass
            if (input === undefined) {
                return getSchemaIssues(
                    info,
                    "type",
                    "non_optional",
                    error || "Este campo debe ser no opcional.",
                    input
                );
            }

            // Return result of wrapped schema
            return wrapped._parse(input, info);
        },
    };
}
