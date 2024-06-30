import type { ErrorMessage, PipeResult } from "../../types.js";
import { getOutput, getPipeIssues } from "../../utils";

/**
 * Creates a validation function that validates whether a number is a multiple.
 *
 * @param requirement The divisor.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function multipleOf<TInput extends number>(
    requirement: number,
    error?: ErrorMessage
) {
    return (input: TInput): PipeResult<TInput> =>
        input % requirement !== 0
            ? getPipeIssues(
                  "multiple_of",
                  error || `Este campo debe ser un múltiplo de ${requirement}.`,
                  input
              )
            : getOutput(input);
}
