import type { ErrorMessage, PipeResult } from "../../types.js";
import { getOutput, getPipeIssues } from "../../utils";

/**
 * Creates a validation function that validates the value of a string, number or date.
 *
 * @param requirement The maximum value.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function maxValue<
    TInput extends string | number | bigint | Date,
    TRequirement extends TInput
>(requirement: TRequirement, error?: ErrorMessage) {
    return (input: TInput): PipeResult<TInput> =>
        input > requirement
            ? getPipeIssues(
                  "max_value",
                  error || `Este campo debe ser como máximo ${requirement}.`,

                  input
              )
            : getOutput(input);
}

/**
 * See {@link maxValue}
 *
 * @deprecated Function has been renamed to `maxValue`.
 */
export const maxRange = maxValue;
