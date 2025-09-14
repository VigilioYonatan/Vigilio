import { toNestErrors } from "@hookform/resolvers";
import type { Resolver } from "./types";
import {
    appendErrors,
    type FieldError,
    type FieldErrors,
} from "react-hook-form";
import { ValiError } from "../error";
import { parse } from "../methods";
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

            const parsed = await parse(
                schema,
                serializeValue(values),
                schemaOpts
            );

            return {
                values: resolverOptions.raw ? serializeValue(values) : parsed,
                errors: {} as FieldErrors<any>,
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
