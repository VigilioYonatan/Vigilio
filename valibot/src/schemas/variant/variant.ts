import type {
    BaseSchema,
    BaseSchemaAsync,
    ErrorMessage,
    Input,
    Issues,
    Output,
} from "../../types";
import { getSchemaIssues, getOutput, getIssues } from "../../utils";
import type { ObjectSchema, ObjectSchemaAsync } from "../object/index.js";

/**
 * Variant option type.
 */
export type VariantOption<TKey extends string> =
    | ObjectSchema<Record<TKey, BaseSchema>, any>
    | (BaseSchema & {
          type: "variant";
          options: VariantOptions<TKey>;
      });

/**
 * Variant options type.
 */
export type VariantOptions<TKey extends string> = [
    VariantOption<TKey>,
    VariantOption<TKey>,
    ...VariantOption<TKey>[]
];

/**
 * Variant schema type.
 */
export type VariantSchema<
    TKey extends string,
    TOptions extends VariantOptions<TKey>,
    TOutput = Output<TOptions[number]>
> = BaseSchema<Input<TOptions[number]>, TOutput> & {
    type: "variant";
    options: TOptions;
};
/**
 * Variant option async type.
 */
export type VariantOptionAsync<TKey extends string> =
    | ObjectSchema<Record<TKey, BaseSchema>, any>
    | ObjectSchemaAsync<Record<TKey, BaseSchema | BaseSchemaAsync>, any>
    | ((BaseSchema | BaseSchemaAsync) & {
          type: "variant";
          options: VariantOptionsAsync<TKey>;
      });

/**
 * Variant options async type.
 */
export type VariantOptionsAsync<TKey extends string> = [
    VariantOptionAsync<TKey>,
    VariantOptionAsync<TKey>,
    ...VariantOptionAsync<TKey>[]
];

/**
 * Variant schema async type.
 */
export type VariantSchemaAsync<
    TKey extends string,
    TOptions extends VariantOptionsAsync<TKey>,
    TOutput = Output<TOptions[number]>
> = BaseSchemaAsync<Input<TOptions[number]>, TOutput> & {
    type: "variant";
    options: TOptions;
};

/**
 * Creates an async variant (aka discriminated union) schema.
 *
 * @param key The discriminator key.
 * @param options The variant options.
 * @param error The error message.
 *
 * @returns An async variant schema.
 */
export function variant<
    TKey extends string,
    TOptions extends VariantOptionsAsync<TKey>
>(
    key: TKey,
    options: TOptions,
    error?: ErrorMessage
): VariantSchemaAsync<TKey, TOptions> {
    return {
        /**
         * The schema type.
         */
        type: "variant",

        /**
         * The variant options.
         */
        options,

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
            if (!input || typeof input !== "object" || !(key in input)) {
                return getSchemaIssues(
                    info,
                    "type",
                    "variant",
                    error || "Invalid type",
                    input
                );
            }

            // Create issues and output
            let issues: Issues | undefined;
            let output: [Record<string, any>] | undefined;

            // Create function to parse options recursively
            const parseOptions = async (options: VariantOptionsAsync<TKey>) => {
                for (const schema of options) {
                    // If it is an object schema, parse discriminator key
                    if (schema.type === "object") {
                        const result = await schema.entries[key]._parse(
                            (input as Record<TKey, unknown>)[key],
                            info
                        );

                        // If right variant option was found, parse it
                        if (!result.issues) {
                            const result = await schema._parse(input, info);

                            // If there are issues, capture them
                            if (result.issues) {
                                issues = result.issues;

                                // Otherwise, set output
                            } else {
                                // Note: Output is nested in array, so that also a falsy value
                                // further down can be recognized as valid value
                                output = [result.output];
                            }

                            // Break loop to end execution
                            break;
                        }

                        // Otherwise, if it is a variant parse its options
                        // recursively
                    } else if (schema.type === "variant") {
                        await parseOptions(schema.options);

                        // If variant option was found, break loop to end execution
                        if (issues || output) {
                            break;
                        }
                    }
                }
            };

            // Parse options recursively
            await parseOptions(options);

            // Return output or issues
            return output
                ? getOutput(output[0])
                : issues
                ? getIssues(issues)
                : getSchemaIssues(
                      info,
                      "type",
                      "variant",
                      error ||
                          "Este campo solo permite valores discriminados según la clave especificada.",
                      input
                  );
        },
    };
}

/**
 * See {@link variantAsync}
 *
 * @deprecated Use `variantAsync` instead.
 */
export const discriminatedUnionAsync = variant;
