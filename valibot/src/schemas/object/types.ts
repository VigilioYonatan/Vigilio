import type {
    BaseSchema,
    BaseSchemaAsync,
    Input,
    Output,
    ResolveObject,
} from "../../types";
import type { NeverSchema, NeverSchemaAsync } from "../never/index.js";
import type { ObjectEntries } from "./object.js";
import type { ObjectEntriesAsync } from "./object.js";

/**
 * Object path item type.
 */
export type ObjectPathItem = {
    type: "object";
    input: Record<string, any>;
    key: string;
    value: any;
};

/**
 * Required object keys type.
 */
type RequiredKeys<TObject extends object> = {
    [TKey in keyof TObject]: undefined extends TObject[TKey] ? never : TKey;
}[keyof TObject];

/**
 * Optional object keys type.
 */
type OptionalKeys<TObject extends object> = {
    [TKey in keyof TObject]: undefined extends TObject[TKey] ? TKey : never;
}[keyof TObject];

/**
 * Object with question marks type.
 */
type WithQuestionMarks<TObject extends object> = Pick<
    TObject,
    RequiredKeys<TObject>
> &
    Partial<Pick<TObject, OptionalKeys<TObject>>>;

/**
 * Object input inference type.
 */
export type ObjectInput<
    TEntries extends ObjectEntries | ObjectEntriesAsync,
    TRest extends BaseSchema | BaseSchemaAsync | undefined
> = TRest extends undefined | NeverSchema | NeverSchemaAsync
    ? ResolveObject<
          WithQuestionMarks<{
              [TKey in keyof TEntries]: Input<TEntries[TKey]>;
          }>
      >
    : TRest extends BaseSchema | BaseSchemaAsync
    ? ResolveObject<
          WithQuestionMarks<{
              [TKey in keyof TEntries]: Input<TEntries[TKey]>;
          }>
      > &
          Record<string, Input<TRest>>
    : never;

/**
 * Object output inference type.
 */
export type ObjectOutput<
    TEntries extends ObjectEntries | ObjectEntriesAsync,
    TRest extends BaseSchema | BaseSchemaAsync | undefined
> = TRest extends undefined | NeverSchema | NeverSchemaAsync
    ? ResolveObject<
          WithQuestionMarks<{
              [TKey in keyof TEntries]: Output<TEntries[TKey]>;
          }>
      >
    : TRest extends BaseSchema | BaseSchemaAsync
    ? ResolveObject<
          WithQuestionMarks<{
              [TKey in keyof TEntries]: Output<TEntries[TKey]>;
          }>
      > &
          Record<string, Output<TRest>>
    : never;
