import type { Output } from "../../types";
import type { SchemaWithMaybeDefault } from "./getDefault.js";
import type { SchemaWithMaybeDefaultAsync } from "./getDefaultAsync.js";

/**
 * Default value type.
 */
export type DefaultValue<
    TSchema extends SchemaWithMaybeDefault | SchemaWithMaybeDefaultAsync
> = TSchema["getDefault"] extends () => Output<TSchema>
    ? ReturnType<TSchema["getDefault"]>
    : TSchema["getDefault"] extends () => Promise<Output<TSchema>>
    ? Awaited<ReturnType<TSchema["getDefault"]>>
    : undefined;
