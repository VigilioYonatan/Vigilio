import { EMAIL_REGEX } from "../../regex.js";
import type { ErrorMessage, PipeResult } from "../../types.js";
import { getOutput, getPipeIssues } from "../../utils";

/**
 * Creates a validation function that validates a email.
 *
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function email<TInput extends string>(error?: ErrorMessage) {
    return (input: TInput): PipeResult<TInput> =>
        !EMAIL_REGEX.test(input)
            ? getPipeIssues(
                  "email",
                  error || "Correo electrónico inválido.",
                  input
              )
            : getOutput(input);
}
