import type { PipeResult } from "../../types.js";
import { getOutput } from "../../utils/index.js";

/**
 * Creates a async custom transformation function.
 *
 * @param action The transform action.
 *
 * @returns A async transformation function.
 */
export function toCustomAsync<TInput>(
    action: (input: TInput) => TInput | Promise<TInput>
) {
    return async (input: TInput): Promise<PipeResult<TInput>> =>
        getOutput(await action(input));
}
