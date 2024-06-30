import { CUID2_REGEX } from "../../regex.js";
import type { ErrorMessage, PipeResult } from "../../types.js";
import { getOutput, getPipeIssues } from "../../utils";

/**
 * Creates a validation function that validates a [cuid2](https://github.com/paralleldrive/cuid2#cuid2).
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function cuid2<TInput extends string>(error?: ErrorMessage) {
    return (input: TInput): PipeResult<TInput> =>
        !CUID2_REGEX.test(input)
            ? getPipeIssues("cuid2", error || "CUID2 inválido.", input)
            : getOutput(input);
}
