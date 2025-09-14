import type {
    BaseSchema,
    BaseSchemaAsync,
    Input,
    Output,
    ResolveObject,
} from "../../types";
import type { EnumSchema, EnumSchemaAsync } from "../enum/index.js";
import type { PicklistSchema, PicklistSchemaAsync } from "../picklist/index.js";
import type { UnionSchema } from "../union/index.js";
import type { RecordKey } from "./record.js";
import type { RecordKeyAsync } from "./record.js";

/**
 * Record path item type.
 */
export type RecordPathItem = {
    type: "record";
    input: Record<string | number | symbol, any>;
    key: string | number | symbol;
    value: any;
};

/**
 * Partial key schema type.
 */
type PartialKeySchema =
    | PicklistSchema<any>
    | PicklistSchemaAsync<any>
    | EnumSchema<any>
    | EnumSchemaAsync<any>
    | UnionSchema<any>;

/**
 * Record input inference type.
 */
export type RecordInput<
    TKey extends RecordKey | RecordKeyAsync,
    TValue extends BaseSchema | BaseSchemaAsync
> = ResolveObject<
    TKey extends PartialKeySchema
        ? Partial<Record<Input<TKey>, Input<TValue>>>
        : Record<Input<TKey>, Input<TValue>>
>;

/**
 * Record output inference type.
 */
export type RecordOutput<
    TKey extends RecordKey | RecordKeyAsync,
    TValue extends BaseSchema | BaseSchemaAsync
> = ResolveObject<
    TKey extends PartialKeySchema
        ? Partial<Record<Output<TKey>, Output<TValue>>>
        : Record<Output<TKey>, Output<TValue>>
>;
