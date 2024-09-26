import type { BaseSchemaAsync, ErrorMessage } from "../../types";
import { getSchemaIssues, getOutput } from "../../utils";
import type { Literal } from "./types.js";

/**
 * Literal schema async type.
 */
export type LiteralSchemaAsync<
    TLiteral extends Literal,
    TOutput = TLiteral
> = BaseSchemaAsync<TLiteral, TOutput> & {
    type: "literal";
    literal: TLiteral;
};

/**
 * Creates an async literal schema.
 *
 * @param literal The literal value.
 * @param error The error message.
 *
 * @returns An async literal schema.
 */
export function literalAsync<TLiteral extends Literal>(
    literal: TLiteral,
    error?: ErrorMessage
): LiteralSchemaAsync<TLiteral> {
    return {
        /**
         * The schema type.
         */
        type: "literal",

        /**
         * The literal value.
         */
        literal,

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
            if (input !== literal) {
                return getSchemaIssues(
                    info,
                    "type",
                    "literal",
                    error || "Este campo es obligatorio.",
                    input
                );
            }

            // Return input as output
            return getOutput(input as TLiteral);
        },
    };
}
