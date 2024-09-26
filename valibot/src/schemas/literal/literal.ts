import type { BaseSchema, ErrorMessage } from "../../types";
import { getSchemaIssues, getOutput } from "../../utils";
import type { Literal } from "./types.js";

/**
 * Literal schema type.
 */
export type LiteralSchema<
    TLiteral extends Literal,
    TOutput = TLiteral
> = BaseSchema<TLiteral, TOutput> & {
    type: "literal";
    literal: TLiteral;
};

/**
 * Creates a literal schema.
 *
 * @param literal The literal value.
 * @param error The error message.
 *
 * @returns A literal schema.
 */
export function literal<TLiteral extends Literal>(
    literal: TLiteral,
    error?: ErrorMessage
): LiteralSchema<TLiteral> {
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
        async: false,

        /**
         * Parses unknown input based on its schema.
         *
         * @param input The input to be parsed.
         * @param info The parse info.
         *
         * @returns The parsed output.
         */
        _parse(input, info) {
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
