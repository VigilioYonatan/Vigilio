import { ISO_TIME_SECOND_REGEX } from "../../regex.js";
import type { ErrorMessage, PipeResult } from "../../types.js";
import { getOutput, getPipeIssues } from "../../utils";

/**
 * Creates a validation function that validates a time with seconds.
 *
 * Format: hh:mm:ss
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function isoTimeSecond<TInput extends string>(error?: ErrorMessage) {
    return (input: TInput): PipeResult<TInput> =>
        !ISO_TIME_SECOND_REGEX.test(input)
            ? getPipeIssues(
                  "iso_time_second",
                  error || "Hora con segundos no válida.",
                  input
              )
            : getOutput(input);
}
