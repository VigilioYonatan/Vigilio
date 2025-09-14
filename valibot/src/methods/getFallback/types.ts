import type { BaseSchemaAsync } from "../../types";
import type { SchemaWithFallbackAsync } from "../fallback/index.js";
import type {
    SchemaWithMaybeFallback,
    SchemaWithMaybeFallbackAsync,
} from "./getFallback.js";

/**
 * Fallback value type.
 */
export type FallbackValue<
    TSchema extends SchemaWithMaybeFallback | SchemaWithMaybeFallbackAsync
> = TSchema extends SchemaWithFallbackAsync<BaseSchemaAsync, infer TFallback>
    ? TFallback
    : undefined;
