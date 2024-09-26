import type { BaseSchema, BaseSchemaAsync } from "../../types";
import type {
    SchemaWithFallback,
    SchemaWithFallbackAsync,
} from "../fallback/index.js";
import type { SchemaWithMaybeFallback } from "./getFallback.js";
import type { SchemaWithMaybeFallbackAsync } from "./getFallbackAsync.js";

/**
 * Fallback value type.
 */
export type FallbackValue<
    TSchema extends SchemaWithMaybeFallback | SchemaWithMaybeFallbackAsync
> = TSchema extends
    | SchemaWithFallback<BaseSchema, infer TFallback>
    | SchemaWithFallbackAsync<BaseSchemaAsync, infer TFallback>
    ? TFallback
    : undefined;
