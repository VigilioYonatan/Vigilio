import type { ErrorMessage, PipeResult } from "../../types.js";
import { getOutput, getPipeIssues } from "../../utils";

/**
 * Creates a validation function that validates whether a number is a safe integer.
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function safeInteger<TInput extends number>(error?: ErrorMessage) {
    return (input: TInput): PipeResult<TInput> =>
        !Number.isSafeInteger(input)
            ? getPipeIssues(
                  "safe_integer",
                  error || `Este campo debe ser un entero seguro.`,
                  input
              )
            : getOutput(input);
}
