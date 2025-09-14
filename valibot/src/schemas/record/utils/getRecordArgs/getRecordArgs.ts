import type {
    BaseSchema,
    BaseSchemaAsync,
    ErrorMessage,
    Pipe,
    PipeAsync,
} from "../../../../types";
import { getDefaultArgs } from "../../../../utils";
import { string } from "../../../string/index.js";
import type { RecordKey } from "../../record.js";
import type { RecordKeyAsync } from "../../record.js";

/**
 * Returns key, value, error and pipe from dynamic arguments.
 *
 * @param arg1 First argument.
 * @param arg2 Second argument.
 * @param arg3 Third argument.
 * @param arg4 Fourth argument.
 *
 * @returns The record arguments.
 */
export function getRecordArgs<
    TKey extends RecordKey | RecordKeyAsync,
    TValue extends BaseSchema | BaseSchemaAsync,
    TPipe extends Pipe<any> | PipeAsync<any>
>(
    arg1: TValue | TKey,
    arg2: TPipe | ErrorMessage | TValue | undefined,
    arg3: TPipe | ErrorMessage | undefined,
    arg4: TPipe | undefined
): [TKey, TValue, ErrorMessage | undefined, TPipe | undefined] {
    if (typeof arg2 === "object" && !Array.isArray(arg2)) {
        const [error, pipe] = getDefaultArgs(arg3, arg4);
        return [arg1 as TKey, arg2, error, pipe];
    }
    const [error, pipe] = getDefaultArgs<TPipe>(
        arg2 as TPipe | ErrorMessage | undefined,
        arg3 as TPipe | undefined
    );
    return [string() as TKey, arg1 as TValue, error, pipe];
}
