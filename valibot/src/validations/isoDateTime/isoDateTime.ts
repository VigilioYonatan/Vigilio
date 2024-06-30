import { ISO_DATE_TIME_REGEX } from "../../regex.js";
import type { ErrorMessage, PipeResult } from "../../types.js";
import { getOutput, getPipeIssues } from "../../utils";

/**
 * Creates a validation function that validates a datetime.
 *
 * Format: yyyy-mm-ddThh:mm
 *
 * Hint: The regex used cannot validate the maximum number of days based on
 * year and month. For example, "2023-06-31T00:00" is valid although June has only
 * 30 days.
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function isoDateTime<TInput extends string>(error?: ErrorMessage) {
    return (input: TInput): PipeResult<TInput> =>
        !ISO_DATE_TIME_REGEX.test(input)
            ? getPipeIssues(
                  "iso_date_time",
                  error || "Fecha y hora no válidas.",
                  input
              )
            : getOutput(input);
}
