import { UseFormOptions } from "./types";

const requiredMessage = "Este campo es obligatorio";
export function requiredValidate<T extends object>(
    required: UseFormOptions<T>["required"],
    value: any
) {
    if (
        typeof required === "boolean" &&
        required &&
        !value &&
        !isNaN(value) &&
        !value.length
    ) {
        return {
            type: "required" as keyof UseFormOptions<T>,
            message: requiredMessage,
        };
    }
    if (required instanceof Object && required.value && !value.length) {
        return {
            type: "required" as keyof UseFormOptions<T>,
            message: required.message || requiredMessage,
        };
    }
}
const requiredNumberMessage = "Este campo solo permite numeros";
export function requiredNumber<T extends object>(
    required: UseFormOptions<T>["isNumber"],
    value: number
) {
    if (typeof required === "boolean" && required && isNaN(value)) {
        return {
            type: "required" as keyof UseFormOptions<T>,
            message: requiredNumberMessage,
        };
    }
    if (required instanceof Object && required.value && isNaN(value)) {
        return {
            type: "required" as keyof UseFormOptions<T>,
            message: required.message || requiredNumberMessage,
        };
    }
}

export function patternValidate<T extends object>(
    pattern: UseFormOptions<T>["pattern"],
    value: string
) {
    if (pattern && pattern.value && !RegExp(pattern.value).test(value)) {
        return {
            type: "pattern" as keyof UseFormOptions<T>,
            message: pattern.message,
        };
    }
}

export function minLength<T extends object>(
    min: UseFormOptions<T>["min"],
    value: string
) {
    if (typeof min === "number" && value.length < min) {
        return {
            type: "min" as keyof UseFormOptions<T>,
            message: `Minimo ${min} caracterés`,
        };
    }
    if (min instanceof Object && value.length < min.value) {
        return {
            type: "min" as keyof UseFormOptions<T>,
            message: min.message || `Minimo ${min.value} caracterés`,
        };
    }
}
export function maxLength<T extends object>(
    max: UseFormOptions<T>["max"],
    value: string
) {
    if (max && typeof max === "number" && value.length > max) {
        return {
            type: "max" as keyof UseFormOptions<T>,
            message: `Máximo ${max} caracterés`,
        };
    }

    if (max instanceof Object && max.value && value.length > max.value) {
        console.log(max);
        console.log(value);

        return {
            type: "max" as keyof UseFormOptions<T>,
            message: max.message || `Máximo ${max.value} caracterés`,
        };
    }
}
export function minNumber<T extends object>(
    min: UseFormOptions<T>["min"],
    value: number
) {
    if (typeof min === "number" && value < min) {
        return {
            type: "min" as keyof UseFormOptions<T>,
            message: `El valor debe ser superior o igual a ${min}`,
        };
    }
    if (min instanceof Object && min.value && value < min.value) {
        return {
            type: "min" as keyof UseFormOptions<T>,
            message:
                min.message ||
                `El valor debe ser superior o igual a ${min.value}`,
        };
    }
}
export function maxNumber<T extends object>(
    max: UseFormOptions<T>["max"],
    value: number
) {
    if (typeof max === "number" && value > max) {
        return {
            type: "max" as keyof UseFormOptions<T>,
            message: `El valor debe ser inferior o igual a ${max}`,
        };
    }
    if (max instanceof Object && max.value && value > max.value) {
        return {
            type: "max" as keyof UseFormOptions<T>,
            message:
                max.message ||
                `El valor debe ser inferior o igual a ${max.value}`,
        };
    }
}
