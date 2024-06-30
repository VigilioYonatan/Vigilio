import type { ErrorMessage, PipeResult } from "../../types.js";
import { getOutput, getPipeIssues } from "../../utils";

/**
 * Creates a validation function that validates the length of a string or array.
 *
 * @param requirement The maximum length.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function maxLength<TInput extends string | any[]>(
    requirement: number,
    error?: ErrorMessage
) {
    return (input: TInput): PipeResult<TInput> =>
        input.length > requirement
            ? getPipeIssues(
                  "max_length",
                  error ||
                      `Este campo debe tener como máximo ${requirement} caracteres.`,
                  input
              )
            : getOutput(input);
}
