import { ISO_TIME_REGEX } from "../../regex.js";
import type { ErrorMessage, PipeResult } from "../../types.js";
import { getOutput, getPipeIssues } from "../../utils";

/**
 * Creates a validation function that validates a time.
 *
 * Format: hh:mm
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function isoTime<TInput extends string>(error?: ErrorMessage) {
    return (input: TInput): PipeResult<TInput> =>
        !ISO_TIME_REGEX.test(input)
            ? getPipeIssues("iso_time", error || "Hora no válida.", input)
            : getOutput(input);
}
