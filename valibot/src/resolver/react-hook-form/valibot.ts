import type { Resolver } from "./types";
import { FieldErrors, FieldError, appendErrors } from "react-hook-form";
import { ValiError } from "../../error";
import { BaseSchema, BaseSchemaAsync } from "../../types";
import { parse, parseAsync } from "../../methods";
import { toNestErrors } from "./resolver";
import { getOutput, getPipeIssues } from "../../utils";
const parseErrors = (
    valiErrors: ValiError,
    validateAllFieldCriteria: boolean
): FieldErrors => {
    const errors: Record<string, FieldError> = {};
    for (; valiErrors.issues.length; ) {
        const error = valiErrors.issues[0];
        if (!error.path) {
            continue;
        }
        const _path = error.path.map(({ key }) => key).join(".");

        if (!errors[_path]) {
            errors[_path] = { message: error.message, type: error.validation };
        }

        if (validateAllFieldCriteria) {
            const types = errors[_path].types;
            const messages = types && types[error.validation];

            errors[_path] = appendErrors(
                _path,
                validateAllFieldCriteria,
                errors,
                error.validation,
                messages
                    ? ([] as string[]).concat(
                          messages as string[],
                          error.message
                      )
                    : error.message
            ) as FieldError;
        }

        valiErrors.issues.shift();
    }

    return errors;
};

export const valibotResolver: Resolver =
    (schema, schemaOptions, resolverOptions = {}) =>
    async (values, _, options) => {
        try {
            const schemaOpts = Object.assign(
                {},
                {
                    abortEarly: false,
                    abortPipeEarly: false,
                },
                schemaOptions
            );

            const parsed =
                resolverOptions.mode === "sync"
                    ? parse(
                          schema as BaseSchema,
                          serializeValue(values),
                          schemaOpts
                      )
                    : await parseAsync(
                          schema as BaseSchema | BaseSchemaAsync,
                          serializeValue(values),
                          schemaOpts
                      );

            return {
                values: resolverOptions.raw ? serializeValue(values) : parsed,
                errors: {} as FieldErrors,
            };
        } catch (error) {
            if (error instanceof ValiError) {
                return {
                    values: {},
                    errors: toNestErrors(
                        parseErrors(
                            error,
                            !options.shouldUseNativeValidation &&
                                options.criteriaMode === "all"
                        ),
                        options
                    ),
                };
            }

            throw error;
        }
    };

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
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
