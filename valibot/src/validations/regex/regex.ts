import type { ErrorMessage, PipeResult } from "../../types.js";
import { getOutput, getPipeIssues } from "../../utils";

/**
 * Creates a validation function that validates a string with a regex.
 *
 * @param requirement The regex pattern.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function regex<TInput extends string>(
    requirement: RegExp,
    error?: ErrorMessage
) {
    return (input: TInput): PipeResult<TInput> =>
        !requirement.test(input)
            ? getPipeIssues(
                  "regex",
                  error || `Este campo no cumple con el patrón requerido.`,
                  input
              )
            : getOutput(input);
}
