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
export function notBytes<TInput extends string>(
    requirement: number,
    error?: ErrorMessage
) {
    return (input: TInput): PipeResult<TInput> =>
        new TextEncoder().encode(input).length === requirement
            ? getPipeIssues(
                  "not_bytes",
                  error ||
                      `Este campo no debe tener exactamente ${requirement} bytes.`,
                  input
              )
            : getOutput(input);
}
