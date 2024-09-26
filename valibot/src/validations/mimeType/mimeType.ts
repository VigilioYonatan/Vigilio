import type { ErrorMessage, PipeResult } from "../../types.js";
import { getOutput, getPipeIssues } from "../../utils";

/**
 * Creates a validation function that validates the MIME type of a file.
 *
 * @param requirement The MIME types.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function mimeType<TInput extends Blob>(
    requirement: `${string}/${string}`[],
    error?: ErrorMessage
) {
    return (input: TInput): PipeResult<TInput> =>
        !requirement.includes(input.type as `${string}/${string}`)
            ? getPipeIssues(
                  "mime_type",
                  error ||
                      `Este campo debe ser uno de los siguientes: ${requirement.join(
                          ", "
                      )}.`,
                  input
              )
            : getOutput(input);
}
