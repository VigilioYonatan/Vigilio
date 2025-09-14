import type { BaseSchema, BaseSchemaAsync, Input, Output } from "../../types";
import { getOutput } from "../../utils";
/**
 * Optional schema type.
 */
export type OptionalSchema<
    TWrapped extends BaseSchema,
    TDefault extends Input<TWrapped> | undefined = undefined,
    TOutput = TDefault extends Input<TWrapped>
        ? Output<TWrapped>
        : Output<TWrapped> | undefined
> = BaseSchema<Input<TWrapped> | undefined, TOutput> & {
    type: "optional";
    wrapped: TWrapped;
    getDefault: () => TDefault;
};

/**
 * Optional schema async type.
 */
export type OptionalSchemaAsync<
    TWrapped extends BaseSchema | BaseSchemaAsync,
    TDefault extends
        | Input<TWrapped>
        | undefined
        | Promise<Input<TWrapped> | undefined> = undefined,
    TOutput = Awaited<TDefault> extends Input<TWrapped>
        ? Output<TWrapped>
        : Output<TWrapped> | undefined
> = BaseSchemaAsync<Input<TWrapped> | undefined, TOutput> & {
    type: "optional";
    wrapped: TWrapped;
    getDefault: () => Promise<TDefault>;
};

/**
 * Creates an async optional schema.
 *
 * @param wrapped The wrapped schema.
 * @param default_ The default value.
 *
 * @returns An async optional schema.
 */
export function optional<
    TWrapped extends BaseSchema | BaseSchemaAsync,
    TDefault extends
        | Input<TWrapped>
        | undefined
        | Promise<Input<TWrapped> | undefined> = undefined
>(
    wrapped: TWrapped,
    default_?: TDefault | (() => TDefault)
): OptionalSchemaAsync<TWrapped, TDefault> {
    return {
        /**
         * The schema type.
         */
        type: "optional",

        /**
         * The wrapped schema.
         */
        wrapped,

        /**
         * Returns the default value.
         */
        async getDefault() {
            return typeof default_ === "function"
                ? (default_ as () => TDefault)()
                : (default_ as TDefault);
        },

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
            // Allow `undefined` to pass or override it with default value
            if (input === undefined) {
                const override = await this.getDefault();
                if (override === undefined) {
                    return getOutput(input);
                }
                input = override;
            }

            // Return result of wrapped schema
            return wrapped._parse(input, info);
        },
    };
}
