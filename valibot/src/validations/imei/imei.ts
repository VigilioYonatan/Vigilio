import { IMEI_REGEX } from "../../regex.js";
import type { ErrorMessage, PipeResult } from "../../types.js";
import { getOutput, getPipeIssues, isLuhnAlgo } from "../../utils";

/**
 * Creates a validation function that validates an [IMEI](https://en.wikipedia.org/wiki/International_Mobile_Equipment_Identity).
 *
 * Format: AA-BBBBBB-CCCCCC-D
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function imei<TInput extends string>(error?: ErrorMessage) {
    return (input: TInput): PipeResult<TInput> =>
        !IMEI_REGEX.test(input) || !isLuhnAlgo(input)
            ? getPipeIssues("imei", error || "IMEI inválido.", input)
            : getOutput(input);
}
