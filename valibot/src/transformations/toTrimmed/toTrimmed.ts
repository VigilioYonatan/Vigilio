import type { PipeResult } from "../../types.js";
import { getOutput } from "../../utils";

/**
 * Creates a transformation function that removes the leading and trailing
 * white space and line terminator characters from a string.
 *
 * @returns A transformation function.
 */
export function toTrimmed() {
    return (input: string): PipeResult<string> => getOutput(input.trim());
}
