import type { ErrorMessage, PipeResult } from "../../types.js";
import { getOutput, getPipeIssues } from "../../utils";

/**
 * Creates a async custom validation function.
 *
 * @param requirement The async validation function.
 * @param error The error message.
 *
 * @returns A async validation function.
 */
export function customAsync<TInput>(
    requirement: (input: TInput) => Promise<boolean>,
    error?: ErrorMessage
) {
    return async (input: TInput): Promise<PipeResult<TInput>> =>
        !(await requirement(input))
            ? getPipeIssues("custom", error || "Invalid input", input)
            : getOutput(input);
}
