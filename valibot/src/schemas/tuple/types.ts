import type { BaseSchema, BaseSchemaAsync, Input, Output } from "../../types";
import type { NeverSchema, NeverSchemaAsync } from "../never/index.js";
import type { TupleItems } from "./tuple.js";
import type { TupleItemsAsync } from "./tuple.js";

/**
 * Tuple path item type.
 */
export type TuplePathItem = {
    type: "tuple";
    input: [any, ...any[]];
    key: number;
    value: any;
};

/**
 * Tuple input inference type.
 */
export type TupleInput<
    TItems extends TupleItems | TupleItemsAsync,
    TRest extends BaseSchema | BaseSchemaAsync | undefined
> = TRest extends undefined | NeverSchema | NeverSchemaAsync
    ? {
          [TKey in keyof TItems]: Input<TItems[TKey]>;
      }
    : TRest extends BaseSchema | BaseSchemaAsync
    ? [
          ...{
              [TKey in keyof TItems]: Input<TItems[TKey]>;
          },
          ...Input<TRest>[]
      ]
    : never;

/**
 * Tuple with rest output inference type.
 */
export type TupleOutput<
    TItems extends TupleItems | TupleItemsAsync,
    TRest extends BaseSchema | BaseSchemaAsync | undefined
> = TRest extends undefined | NeverSchema | NeverSchemaAsync
    ? {
          [TKey in keyof TItems]: Output<TItems[TKey]>;
      }
    : TRest extends BaseSchema | BaseSchemaAsync
    ? [
          ...{
              [TKey in keyof TItems]: Output<TItems[TKey]>;
          },
          ...Output<TRest>[]
      ]
    : never;
