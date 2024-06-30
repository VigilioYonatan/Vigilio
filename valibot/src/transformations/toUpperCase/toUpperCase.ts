import type { PipeResult } from "../../types.js";
import { getOutput } from "../../utils";

/**
 * Creates a transformation function that converts all the alphabetic
 * characters in a string to uppercase.
 *
 * @returns A transformation function.
 */
export function toUpperCase() {
    return (input: string): PipeResult<string> =>
        getOutput(input.toUpperCase());
}
