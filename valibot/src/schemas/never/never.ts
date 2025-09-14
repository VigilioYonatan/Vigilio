import type { BaseSchema, BaseSchemaAsync, ErrorMessage } from "../../types";
import { getSchemaIssues } from "../../utils";
/**
 * Never schema type.
 */
export type NeverSchema = BaseSchema<never> & {
    type: "never";
};
/**
 * Never schema async type.
 */
export type NeverSchemaAsync = BaseSchemaAsync<never> & {
    type: "never";
};

/**
 * Creates an async never schema.
 *
 * @param error The error message.
 *
 * @returns An async never schema.
 */
export function never(error?: ErrorMessage): NeverSchemaAsync {
    return {
        /**
         * The schema type.
         */
        type: "never",

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
            return getSchemaIssues(
                info,
                "type",
                "never",
                error || "Este campo solo permite never.",
                input
            );
        },
    };
}
