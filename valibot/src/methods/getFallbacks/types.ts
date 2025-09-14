import type {
    ObjectSchema,
    ObjectEntries,
    TupleSchema,
    ObjectSchemaAsync,
    ObjectEntriesAsync,
    TupleSchemaAsync,
    TupleItems,
    TupleItemsAsync,
} from "../../schemas";
import type { BaseSchema, BaseSchemaAsync } from "../../types";
import type { SchemaWithFallbackAsync } from "../fallback/index.js";
import type {
    SchemaWithMaybeFallback,
    SchemaWithMaybeFallbackAsync,
} from "../getFallback/index.js";

/**
 * Fallback values type.
 */
export type FallbackValues<
    TSchema extends
        | SchemaWithMaybeFallback<
              | BaseSchema
              | ObjectSchema<ObjectEntries, any>
              | TupleSchema<TupleItems, any>
          >
        | SchemaWithMaybeFallbackAsync<
              | BaseSchemaAsync
              | ObjectSchemaAsync<ObjectEntriesAsync, any>
              | TupleSchemaAsync<TupleItemsAsync, any>
          >
> = TSchema extends SchemaWithFallbackAsync<BaseSchemaAsync, infer TFallback>
    ? TFallback
    : TSchema extends ObjectSchema<infer TEntries extends ObjectEntries>
    ? { [TKey in keyof TEntries]: FallbackValues<TEntries[TKey]> }
    : TSchema extends ObjectSchemaAsync<
          infer TEntries extends ObjectEntriesAsync
      >
    ? { [TKey in keyof TEntries]: FallbackValues<TEntries[TKey]> }
    : TSchema extends TupleSchema<infer TItems>
    ? { [TKey in keyof TItems]: FallbackValues<TItems[TKey]> }
    : TSchema extends TupleSchemaAsync<infer TItems>
    ? { [TKey in keyof TItems]: FallbackValues<TItems[TKey]> }
    : undefined;
