import type { ErrorMessage, Issue } from "../../types.js";
import { getErrorMessage } from "../getErrorMessage/index.js";
import { getIssues } from "../getIssues/getIssues.js";

/**
 * Returns the pipeline result object with issues.
 *
 * @param validation The validation name.
 * @param error The error message.
 * @param input The input value.
 *
 * @returns The pipeline result object.
 */
export function getPipeIssues(
    validation: string,
    error: ErrorMessage,
    input: unknown
): { issues: Pick<Issue, "validation" | "message" | "input" | "path">[] } {
    return getIssues([
        {
            validation,
            message: getErrorMessage(error),
            input,
        },
    ]);
}
