import {
    object,
    type ObjectOutput,
    type ObjectSchema,
    type ObjectSchemaAsync,
} from "../../schemas";
import type {
    BaseSchema,
    BaseSchemaAsync,
    ErrorMessage,
    PipeAsync,
} from "../../types";
import { getRestAndDefaultArgs } from "../../utils";
import type { ObjectKeys } from "./types.js";

/**
 * Creates an async object schema that contains only the selected keys of an
 * existing schema.
 *
 * @param schema The schema to omit from.
 * @param keys The selected keys
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async object schema.
 */
export function omit<
    TSchema extends ObjectSchema<any, any> | ObjectSchemaAsync<any, any>,
    TKeys extends ObjectKeys<TSchema>
>(
    schema: TSchema,
    keys: TKeys,
    pipe?: PipeAsync<
        ObjectOutput<Omit<TSchema["entries"], TKeys[number]>, undefined>
    >
): ObjectSchemaAsync<Omit<TSchema["entries"], TKeys[number]>>;

/**
 * Creates an async object schema that contains only the selected keys of an
 * existing schema.
 *
 * @param schema The schema to omit from.
 * @param keys The selected keys
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async object schema.
 */
export function omit<
    TSchema extends ObjectSchema<any, any> | ObjectSchemaAsync<any, any>,
    TKeys extends ObjectKeys<TSchema>
>(
    schema: TSchema,
    keys: TKeys,
    error?: ErrorMessage,
    pipe?: PipeAsync<
        ObjectOutput<Omit<TSchema["entries"], TKeys[number]>, undefined>
    >
): ObjectSchemaAsync<Omit<TSchema["entries"], TKeys[number]>>;

/**
 * Creates an async object schema that contains only the selected keys of an
 * existing schema.
 *
 * @param schema The schema to omit from.
 * @param keys The selected keys
 * @param rest The object rest.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async object schema.
 */
export function omit<
    TSchema extends ObjectSchema<any, any> | ObjectSchemaAsync<any, any>,
    TKeys extends ObjectKeys<TSchema>,
    TRest extends BaseSchema | BaseSchemaAsync | undefined
>(
    schema: TSchema,
    keys: TKeys,
    rest: TRest,
    pipe?: PipeAsync<
        ObjectOutput<Omit<TSchema["entries"], TKeys[number]>, TRest>
    >
): ObjectSchemaAsync<Omit<TSchema["entries"], TKeys[number]>, TRest>;

/**
 * Creates an async object schema that contains only the selected keys of an
 * existing schema.
 *
 * @param schema The schema to omit from.
 * @param keys The selected keys
 * @param rest The object rest.
 * @param error The error message.
 * @param pipe A validation and transformation pipe.
 *
 * @returns An async object schema.
 */
export function omit<
    TSchema extends ObjectSchema<any, any> | ObjectSchemaAsync<any, any>,
    TKeys extends ObjectKeys<TSchema>,
    TRest extends BaseSchema | BaseSchemaAsync | undefined
>(
    schema: TSchema,
    keys: TKeys,
    rest: TRest,
    error?: ErrorMessage,
    pipe?: PipeAsync<
        ObjectOutput<Omit<TSchema["entries"], TKeys[number]>, TRest>
    >
): ObjectSchemaAsync<Omit<TSchema["entries"], TKeys[number]>, TRest>;

export function omit<
    TSchema extends ObjectSchema<any, any> | ObjectSchemaAsync<any, any>,
    TKeys extends ObjectKeys<TSchema>,
    TRest extends BaseSchema | BaseSchemaAsync | undefined = undefined
>(
    schema: TSchema,
    keys: TKeys,
    arg3?:
        | PipeAsync<
              ObjectOutput<Omit<TSchema["entries"], TKeys[number]>, TRest>
          >
        | ErrorMessage
        | TRest,
    arg4?:
        | PipeAsync<
              ObjectOutput<Omit<TSchema["entries"], TKeys[number]>, TRest>
          >
        | ErrorMessage,
    arg5?: PipeAsync<
        ObjectOutput<Omit<TSchema["entries"], TKeys[number]>, TRest>
    >
): ObjectSchemaAsync<Omit<TSchema["entries"], TKeys[number]>, TRest> {
    // Get rest, error and pipe argument
    const [rest, error, pipe] = getRestAndDefaultArgs<
        TRest,
        PipeAsync<ObjectOutput<Omit<TSchema["entries"], TKeys[number]>, TRest>>
    >(arg3, arg4, arg5);

    // Create and return object schema
    return object(
        Object.entries(schema.entries).reduce(
            (entries, [key, schema]) =>
                keys.includes(key) ? entries : { ...entries, [key]: schema },
            {}
        ) as Omit<TSchema["entries"], TKeys[number]>,
        rest,
        error,
        pipe
    );
}
