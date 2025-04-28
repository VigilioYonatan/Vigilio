// filepath: form-validator/src/schema/validator.ts

import type { Schema, ValidationResult } from "../types/validator";

export function validateSchema(
    schema: Schema,
    data: Record<string, any>
): ValidationResult {
    const messages: Record<string, string> = {};
    let isValid = true;

    for (const key in schema) {
        const rules = schema[key];
        const value = data[key];

        if (rules.required && !value) {
            isValid = false;
            messages[key] = schema[key].message ?? `${key} es requerido.`;
            continue;
        }

        if (rules.minLength && value.length < rules.minLength) {
            isValid = false;
            messages[key] =
                schema[key].message ??
                `${key} debe tener al menos ${rules.minLength} caracteres.`;
        }

        if (rules.maxLength && value.length > rules.maxLength) {
            isValid = false;
            messages[key] =
                schema[key].message ??
                `${key} no debe tener más de ${rules.maxLength} caracteres.`;
        }

        if (rules.regex && !rules.regex.test(value)) {
            isValid = false;
            messages[key] = schema[key].message ?? `Formato invalido ${key}.`;
        }
    }

    return { isValid, messages };
}

// Example usage
// const schema = {
//     name: { required: true, minLength: 3 },
//     telephone: { required: true, minLength: 9, maxLength: 9 },
//     email: { required: true, regex: emailRegex },
// };

// const data = {
//     name: "John",
//     telephone: "123456789",
//     email: "john@example.com",
// };

// const result = validateSchema(schema, data);
// console.log(result); // { isValid: true, errors: {} }
