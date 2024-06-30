import type { ErrorMessage, PipeResult } from "../../types.js";
import { getOutput, getPipeIssues } from "../../utils";

/**
 * Creates a validation function that checks the value for equality.
 *
 * @deprecated Function has been renamed to `value`.
 *
 * @param requirement The required value.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function equal<
    TInput extends string | number | bigint | boolean,
    TRequirement extends TInput
>(requirement: TRequirement, error?: ErrorMessage) {
    return (input: TInput): PipeResult<TInput> =>
        input !== requirement
            ? getPipeIssues(
                  "equal",
                  error || `Este campo debe ser igual a ${requirement}.`,
                  input
              )
            : getOutput(input);
}
