import type { ErrorMessage, PipeResult } from "../../types.js";
import { getOutput, getPipeIssues } from "../../utils";

/**
 * Creates a validation function that validates the value of a string, number or date.
 *
 * @param requirement The minimum value.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function minValue<
    TInput extends string | number | bigint | Date,
    TRequirement extends TInput
>(requirement: TRequirement, error?: ErrorMessage) {
    return (input: TInput): PipeResult<TInput> =>
        input < requirement
            ? getPipeIssues(
                  "min_value",
                  error || `Este campo debe ser como mínimo ${requirement}.`,
                  input
              )
            : getOutput(input);
}

/**
 * See {@link minValue}
 *
 * @deprecated Function has been renamed to `minValue`.
 */
export const minRange = minValue;
