import type { BaseSchema, BaseSchemaAsync, ErrorMessage } from "../../types";
import { getSchemaIssues, getOutput } from "../../utils";

/**
 * Enum type.
 */
export type Enum = {
    [key: string]: string | number;
    [key: number]: string;
};

/**
 * Native enum schema type.
 */
export type EnumSchema<
    TEnum extends Enum,
    TOutput = TEnum[keyof TEnum]
> = BaseSchema<TEnum[keyof TEnum], TOutput> & {
    type: "enum";
    enum: TEnum;
};

/**
 * Native enum schema async type.
 */
export type EnumSchemaAsync<
    TEnum extends Enum,
    TOutput = TEnum[keyof TEnum]
> = BaseSchemaAsync<TEnum[keyof TEnum], TOutput> & {
    type: "enum";
    enum: TEnum;
};

/**
 * Creates an async enum schema.
 *
 * @param enum_ The enum value.
 * @param error The error message.
 *
 * @returns An async enum schema.
 */
export function enum_<TEnum extends Enum>(
    enum_: TEnum,
    error?: ErrorMessage
): EnumSchemaAsync<TEnum> {
    return {
        /**
         * The schema type.
         */
        type: "enum",

        /**
         * The enum value.
         */
        enum: enum_,

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
            if (!Object.values(enum_).includes(input as any)) {
                return getSchemaIssues(
                    info,
                    "type",
                    "enum",
                    error ||
                        "Este campo solo permite valores del enum especificado.",
                    input
                );
            }

            // Return input as output
            return getOutput(input as TEnum[keyof TEnum]);
        },
    };
}

/**
 * See {@link enumAsync}
 *
 * @deprecated Use `enumAsync` instead.
 */
export const nativeEnumAsync = enum_;
