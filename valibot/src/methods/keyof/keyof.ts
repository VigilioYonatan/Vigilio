import {
    picklist,
    PicklistSchemaAsync,
    type ObjectSchema,
    type ObjectSchemaAsync,
} from "../../schemas";

/**
 * Converts union to intersection types.
 */
type UnionToIntersection<T> = (
    T extends never ? never : (arg: T) => never
) extends (arg: infer U) => never
    ? U
    : never;

/**
 * Converts union to tuple types.
 */
type UnionToTuple<T> = UnionToIntersection<
    T extends never ? never : () => T
> extends () => infer W
    ? [...UnionToTuple<Exclude<T, W>>, W]
    : [];

/**
 * Returns a tuple or never type.
 */
type TupleOrNever<T> = T extends [string, ...string[]] ? T : never;

/**
 * Creates a enum schema of object keys.
 *
 * @param schema The object schema.
 *
 * @returns A enum schema.
 */
export function keyof<
    TSchema extends ObjectSchema<any, any> | ObjectSchemaAsync<any, any>
>(
    schema: TSchema
): PicklistSchemaAsync<TupleOrNever<UnionToTuple<keyof TSchema["entries"]>>> {
    return picklist(
        Object.keys(schema.entries) as TupleOrNever<
            UnionToTuple<keyof TSchema["entries"]>
        >
    );
}
