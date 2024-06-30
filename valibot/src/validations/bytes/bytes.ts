import type { ErrorMessage, PipeResult } from "../../types.js";
import { getOutput, getPipeIssues } from "../../utils";

/**
 * Creates a validation function that validates the byte length of a string.
 *
 * @param requirement The byte length.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function bytes<TInput extends string>(
    requirement: number,
    error?: ErrorMessage
) {
    return (input: TInput): PipeResult<TInput> =>
        new TextEncoder().encode(input).length !== requirement
            ? getPipeIssues(
                  "bytes",
                  error || `La longitud en bytes debe ser ${requirement}.`,
                  input
              )
            : getOutput(input);
}
