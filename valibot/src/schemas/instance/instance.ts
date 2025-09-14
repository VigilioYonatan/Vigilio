import type {
    BaseSchema,
    BaseSchemaAsync,
    ErrorMessage,
    PipeAsync,
} from "../../types";
import { executePipe, getDefaultArgs, getSchemaIssues } from "../../utils";

/**
 * Class enum type.
 */
export type Class = abstract new (...args: any) => any;
/**
 * Instance schema type.
 */
export type InstanceSchema<
    TClass extends Class,
    TOutput = InstanceType<TClass>
> = BaseSchema<InstanceType<TClass>, TOutput> & {
    type: "instance";
    class: TClass;
};

/**
 * Instance schema type.
 */
export type InstanceSchemaAsync<
    TClass extends Class,
    TOutput = InstanceType<TClass>
> = BaseSchemaAsync<InstanceType<TClass>, TOutput> & {
    type: "instance";
    class: TClass;
};

/**
 * Creates an async instance schema.
 *
 * @param of The class of the instance.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async instance schema.
 */
export function instanceAsync<TClass extends Class>(
    of: TClass,
    pipe?: PipeAsync<InstanceType<TClass>>
): InstanceSchemaAsync<TClass>;

/**
 * Creates an async instance schema.
 *
 * @param of The class of the instance.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async instance schema.
 */
export function instanceAsync<TClass extends Class>(
    of: TClass,
    error?: ErrorMessage,
    pipe?: PipeAsync<InstanceType<TClass>>
): InstanceSchemaAsync<TClass>;

export function instanceAsync<TClass extends Class>(
    of: TClass,
    arg2?: PipeAsync<InstanceType<TClass>> | ErrorMessage,
    arg3?: PipeAsync<InstanceType<TClass>>
): InstanceSchemaAsync<TClass> {
    // Get error and pipe argument
    const [error, pipe] = getDefaultArgs(arg2, arg3);

    // Create and return string schema
    return {
        /**
         * The schema type.
         */
        type: "instance",

        /**
         * The class of the instance.
         */
        class: of,

        /**
         * Whether it's async.
         */
        async: true,

        /**
         * Parses unknown input based on its schema.
         *
         * @param input The input to be parsed.
         * @param info The parse info.
         *
         * @returns The parsed output.
         */
        async _parse(input, info) {
            // Check type of input
            if (!(input instanceof of)) {
                return getSchemaIssues(
                    info,
                    "type",
                    "instance",
                    error || "Este campo es obligatorio.",
                    input
                );
            }

            // Execute pipe and return result
            return executePipe(input, pipe, info, "instance");
        },
    };
}
