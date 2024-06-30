import type { PipeResult } from "../../types.js";
import { getOutput } from "../../utils";

/**
 * Creates a custom transformation function.
 *
 * @param action The transform action.
 *
 * @returns A transformation function.
 */
export function toCustom<TInput>(action: (input: TInput) => TInput) {
    return (input: TInput): PipeResult<TInput> => getOutput(action(input));
}
