import type { ErrorMessage, PipeResult } from "../../types.js";
import { getOutput, getPipeIssues } from "../../utils";

/**
 * Creates a validation function that validates whether a number is finite.
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function finite<TInput extends number>(error?: ErrorMessage) {
    return (input: TInput): PipeResult<TInput> =>
        !Number.isFinite(input)
            ? getPipeIssues("finite", error || "Número finito inválido.", input)
            : getOutput(input);
}
