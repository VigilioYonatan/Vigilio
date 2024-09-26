import type { ErrorMessage, PipeResult } from "../../types.js";
import { getOutput, getPipeIssues } from "../../utils";

/**
 * Creates a custom validation function.
 *
 * @param requirement The validation function.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function custom<TInput>(
    requirement: (input: TInput) => boolean,
    error?: ErrorMessage
) {
    return (input: TInput): PipeResult<TInput> =>
        !requirement(input)
            ? getPipeIssues("custom", error || "Invalid input", input)
            : getOutput(input);
}
