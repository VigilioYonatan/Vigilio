import { PartialDeep } from "type-fest";
import {
    cleanupNonNestedPath,
    isNotNestedPath,
    type TypedSchema,
    type TypedSchemaError,
} from "vee-validate";
import { isIndex, isObject, merge, normalizeFormPath } from ".";
import { BaseSchema, BaseSchemaAsync, Input, Issue, Output } from "../../types";
import { getDefault, safeParse, safeParseAsync } from "../../methods";
import { ArraySchema, ObjectSchema, optional } from "../../schemas";
import { getOutput, getPipeIssues } from "../../utils";
export function serializeValue(values: any) {
    return Object.fromEntries(
        Object.entries(values).map(([key, value]) => {
            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            const updatedValue: any =
                value === ""
                    ? null
                    : value instanceof Object && !Array.isArray(value) //si es objeto y no array
                    ? serializeValue(value)
                    : value;
            return [key, updatedValue];
        })
    );
}
export function toTypedSchema<
    TSchema extends BaseSchema | BaseSchemaAsync,
    TOutput = Output<TSchema>,
    TInput = PartialDeep<Input<TSchema>>
>(valibotSchema: TSchema): TypedSchema<TInput, TOutput> {
    const schema: TypedSchema = {
        __type: "VVTypedSchema",
        async parse(value) {
            const result = await safeParseAsync(
                valibotSchema,
                serializeValue(value)
            );
            if (result.success) {
                return {
                    value: result.data,
                    errors: [],
                };
            }

            const errors: Record<string, TypedSchemaError> = {};
            processIssues(result.issues, errors);

            return {
                errors: Object.values(errors),
            };
        },
        cast(values) {
            if (valibotSchema.async) {
                return values;
            }

            const result = safeParse(valibotSchema, serializeValue(values));
            if (result.success) {
                return result.data;
            }

            const defaults = getDefault(optional(valibotSchema));
            if (isObject(defaults) && isObject(values)) {
                return merge(defaults, values);
            }

            return values;
        },
        describe(path) {
            if (!path) {
                return {
                    required: !queryOptional(valibotSchema),
                    exists: true,
                };
            }

            const pathSchema = getSchemaForPath(path, valibotSchema);
            if (!pathSchema) {
                return {
                    required: false,
                    exists: false,
                };
            }

            return {
                required: !queryOptional(pathSchema),
                exists: true,
            };
        },
    };

    return schema;
}

function processIssues(
    issues: Issue[],
    errors: Record<string, TypedSchemaError>
): void {
    issues.forEach((issue) => {
        const path = normalizeFormPath(
            (issue.path || []).map((p) => p.key).join(".")
        );
        if (issue.issues?.length) {
            processIssues(
                issue.issues.flatMap((ue) => ue.issues || []),
                errors
            );

            if (!path) {
                return;
            }
        }

        if (!errors[path]) {
            errors[path] = { errors: [], path };
        }

        errors[path].errors.push(issue.message);
    });
}

function getSchemaForPath(path: string, schema: any): BaseSchema | null {
    if (!isObjectSchema(schema)) {
        return null;
    }

    if (isNotNestedPath(path)) {
        return schema.entries[cleanupNonNestedPath(path)];
    }

    const paths = (path || "").split(/\.|\[(\d+)\]/).filter(Boolean);

    let currentSchema: BaseSchema = schema;
    for (let i = 0; i <= paths.length; i++) {
        const p = paths[i];
        if (!p || !currentSchema) {
            return currentSchema;
        }

        if (isObjectSchema(currentSchema)) {
            currentSchema = currentSchema.entries[p] || null;
            continue;
        }

        if (isIndex(p) && isArraySchema(currentSchema)) {
            currentSchema = currentSchema.item;
        }
    }

    return null;
}

function queryOptional(schema: BaseSchema | BaseSchemaAsync): boolean {
    return (schema as any).type === "optional";
}

function isArraySchema(schema: unknown): schema is ArraySchema<any> {
    return isObject(schema) && schema.type === "array";
}

function isObjectSchema(schema: unknown): schema is ObjectSchema<any> {
    console.log({ schema });

    return isObject(schema) && schema.type === "object";
}

/**
 * file validation
 * @param {Object} props
 *  @property {boolean} required -  true will be optional, false will be required
 *  @property {number} min - min files that upload to serve
 *  @property {number} max - max files that upload to serve
 *  @property {string[]} types - types extension - @default ["image/jpg","image/png","image/webp","image/gif","image/jpeg"]
 *  @property {number} maxSize - max sizes files that upload to serve
 *  @property {number} minSize - min sizes files that upload to serve
 */
export function validFileValibot(props: {
    required: boolean;
    min: number;
    max?: number;
    types?: string[] | null;
    maxSize?: number;
    minSize?: number;
}) {
    return (files: File[]) => {
        const {
            required,
            max = null,
            maxSize,
            min,
            minSize = 0.0001,
            types = [
                "image/jpg",
                "image/png",
                "image/webp",
                "image/gif",
                "image/jpeg",
            ],
        } = props;

        if (required && !files.length) {
            return getPipeIssues("custom", "Este campo es obligatorio", files);
        }
        if (max) {
            if (files.length > max) {
                return getPipeIssues(
                    "custom",
                    `Este campo solo permite maximo ${max} archivos`,
                    files
                );
            }
        }
        if (min) {
            if (files.length < min) {
                return getPipeIssues(
                    "custom",
                    `Este campo solo permite minimo ${min} archivos`,
                    files
                );
            }
        }
        if (types) {
            for (const file of files) {
                if (!types.includes(file.type)) {
                    return getPipeIssues(
                        "custom",
                        `Este campo solo permite archivos de formato ${types.join(
                            ", "
                        )}`,
                        files
                    );
                }
                const mb = 1000000;
                const size = file.size;
                if (maxSize && size > maxSize * mb) {
                    return getPipeIssues(
                        "custom",
                        `Este archivo es demasiado pesado ${file.name.slice(
                            0,
                            12
                        )}. Máximo ${maxSize} MB`,
                        files
                    );
                }

                if (minSize && size < minSize * mb) {
                    return getPipeIssues(
                        "custom",
                        `Este archivo es demasiado ligero ${file.name.slice(
                            0,
                            12
                        )}. Mínimo ${minSize} MB`,
                        files
                    );
                }
            }
        }

        return getOutput(files);
    };
}
