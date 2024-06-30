import type { ErrorMessage, PipeResult } from "../../types.js";
import { getOutput, getPipeIssues } from "../../utils";

/**
 * Creates a validation function that validates the value of a string or number.
 *
 * @param requirement The value.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function value<
    TInput extends string | number | bigint,
    TRequirement extends TInput
>(requirement: TRequirement, error?: ErrorMessage) {
    return (input: TInput): PipeResult<TInput> =>
        input !== requirement
            ? getPipeIssues(
                  "value",
                  error || `Este campo debe ser igual a ${requirement}.`,
                  input
              )
            : getOutput(input);
}
