import type { ErrorMessage, PipeResult } from "../../types.js";
import { getOutput, getPipeIssues } from "../../utils";

/**
 * Creates a validation function that validates the start of a string.
 *
 * @param requirement The start string.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function startsWith<TInput extends string>(
    requirement: string,
    error?: ErrorMessage
) {
    return (input: TInput): PipeResult<TInput> =>
        !input.startsWith(requirement as any)
            ? getPipeIssues(
                  "starts_with",
                  error || `Este campo debe comenzar con "${requirement}".`,
                  input
              )
            : getOutput(input);
}
