import { IPV6_REGEX } from "../../regex.js";
import type { ErrorMessage, PipeResult } from "../../types.js";
import { getOutput, getPipeIssues } from "../../utils";

/**
 * Creates a validation function that validates an IP v6 address.
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function ipv6<TInput extends string>(error?: ErrorMessage) {
    return (input: TInput): PipeResult<TInput> =>
        !IPV6_REGEX.test(input)
            ? getPipeIssues("ipv6", error || "IP v4 no válido.", input)
            : getOutput(input);
}
