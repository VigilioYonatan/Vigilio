import type { PipeResult } from "../../types.js";
import { getOutput } from "../../utils";

/**
 * Creates a transformation function that removes the trailing white space and
 * line terminator characters from a string.
 *
 * @returns A transformation function.
 */
export function toTrimmedEnd() {
    return (input: string): PipeResult<string> => getOutput(input.trimEnd());
}
