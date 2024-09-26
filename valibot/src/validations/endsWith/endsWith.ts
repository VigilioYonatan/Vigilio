import type { ErrorMessage, PipeResult } from "../../types.js";
import { getOutput, getPipeIssues } from "../../utils";

/**
 * Creates a validation function that validates the end of a string.
 *
 * @param requirement The end string.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function endsWith<TInput extends string>(
    requirement: string,
    error?: ErrorMessage
) {
    return (input: TInput): PipeResult<TInput> =>
        !input.endsWith(requirement as any)
            ? getPipeIssues(
                  "ends_with",
                  error || `Este campo de finalizar con ${requirement}`,
                  input
              )
            : getOutput(input);
}
