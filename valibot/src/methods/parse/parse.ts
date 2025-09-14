import { ValiError } from "../../error";
import type {
    BaseSchema,
    BaseSchemaAsync,
    Output,
    ParseInfo,
} from "../../types";

/**
 * Parses unknown input based on a schema.
 *
 * @param schema The schema to be used.
 * @param input The input to be parsed.
 * @param info The optional parse info.
 *
 * @returns The parsed output.
 */
export async function parse<TSchema extends BaseSchema | BaseSchemaAsync>(
    schema: TSchema,
    input: unknown,
    info?: Pick<ParseInfo, "abortEarly" | "abortPipeEarly" | "skipPipe">
): Promise<Output<TSchema>> {
    const result = await schema._parse(input, info);
    if (result.issues) {
        throw new ValiError(result.issues);
    }
    return result.output;
}
