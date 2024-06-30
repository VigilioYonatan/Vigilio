import type { ErrorMessage, PipeResult } from "../../types.js";
import { getOutput, getPipeIssues } from "../../utils";

/**
 * Creates a validation function that validates the length of a string or array.
 *
 * @param requirement The length.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function length<TInput extends string | any[]>(
    requirement: number,
    error?: ErrorMessage
) {
    return (input: TInput): PipeResult<TInput> =>
        input.length !== requirement
            ? getPipeIssues(
                  "length",
                  error ||
                      `Este campo debe ser exactamente ${requirement} caracteres.`,
                  input
              )
            : getOutput(input);
}
