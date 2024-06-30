import { ULID_REGEX } from "../../regex.js";
import type { ErrorMessage, PipeResult } from "../../types.js";
import { getOutput, getPipeIssues } from "../../utils";

/**
 * Creates a validation function that validates a [ULID](https://github.com/ulid/spec).
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function ulid<TInput extends string>(error?: ErrorMessage) {
    return (input: TInput): PipeResult<TInput> =>
        !ULID_REGEX.test(input)
            ? getPipeIssues("ulid", error || "ULID no válido.", input)
            : getOutput(input);
}
