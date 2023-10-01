import { onMounted, reactive, ref } from "vue";
import {
    Control,
    Errores,
    UseFormOptions,
    UseFormOptionsFile,
    UseFormProps,
} from "./types";
function useForm<T extends Object>(props?: UseFormProps<T>) {
    const { defaultValues = {}, type = "normal" } = props || {
        defaultValues: {},
        type: "normal",
    };
    const values = reactive<T>({} as T);
    const valuesInput: Record<keyof T, string> = reactive(
        {} as Record<keyof T, string>
    );
    const errores = reactive<Errores<T>>({} as Errores<T>);
    const refs = ref<Record<keyof T, any>>({} as Record<keyof T, any>);
    const opciones = reactive<UseFormOptions<T>>({} as UseFormOptions<T>);
    const formState = reactive({
        isSubmmit: false,
        isErrors: false,
    });

    function controlFile(name: keyof T, options?: UseFormOptionsFile) {
        const controlRef = ref();
        if ((values as T)[name] === undefined) {
            setValue(name, "" as any);
        }
        if ((opciones as any)[name] === undefined) {
            (opciones as any)[name] = options || {};
        }

        if ((refs as any)[name] === undefined) {
            (refs as any).value[name] = controlRef;
        }

        async function onChange(e: Event) {
            const value: any = (e.target as HTMLInputElement).files;
            setValue(name, value);
            if (type === "submit" && !formState.isSubmmit) return;
            await validate(name, (opciones as any)[name]);
        }

        async function onBlur(_e: Event) {
            if (type === "blur") {
                await validate(name, (opciones as any)[name]);
            }
        }
        return {
            id: name,
            name,
            ref: controlRef,
            onBlur,
            onChange,
        };
    }

    const control: Control<T> = (
        name: keyof T,
        options?: UseFormOptions<T>
    ) => {
        const controlRef = ref();
        if (valuesInput[name] === undefined) {
            setValueInput(name, String((defaultValues as any)[name] || ""));
        }
        if ((values as T)[name] === undefined) {
            let value: any = "" as T[keyof T];
            if ((defaultValues as any)[name]) {
                value = (defaultValues as T)[name];
            }
            if (options?.transformValue) {
                value = options.transformValue(
                    (defaultValues as any)[name] ?? ""
                );
            }
            if (options?.isArray) {
                value =
                    (defaultValues as any)[name] instanceof Array
                        ? (defaultValues as any)[name]
                        : [];
            }

            setValue(name, value);
        }
        if ((opciones as any)[name] === undefined) {
            (opciones as any)[name] = options || {};
        }

        if ((refs as any)[name] === undefined) {
            (refs as any).value[name] = controlRef;
        }

        async function onInput(e: Event) {
            let value: any = (e.target as HTMLInputElement).value;
            setValueInput(name, value);
            if (options?.transformValue) {
                value = options.transformValue(value as any);
            }
            if (options?.isArray && (values as any)[name] instanceof Array) {
                const exist = (values as any)[name].some(
                    (val: string) => val === value
                );
                if (exist) {
                    value = (values as any)[name].filter(
                        (val: string) => val !== value
                    );
                } else {
                    value = [...(values as any)[name], value];
                }
            }
            setValue(name, value);
            if (type === "submit" && !formState.isSubmmit) return;
            await validate(name, (opciones as any)[name]);
        }

        async function onBlur(_e: Event) {
            if (type === "blur") {
                await validate(name, (opciones as any)[name]);
            }
        }

        return {
            id: name,
            name,
            ref: controlRef,
            onBlur,
            value: options?.value || valuesInput[name],
            onInput,
        };
    };

    onMounted(async () => {
        if (type !== "initial") return;
        for (const [name, _val] of Object.entries(values)) {
            await validate(name as keyof T, (opciones as any)[name]);
        }
    });

    function handleSubmit(cb: (data: T) => void) {
        return async (e: Event) => {
            e?.preventDefault();
            formState.isSubmmit = true;
            for (const [name, _val] of Object.entries(values)) {
                await validate(name as keyof T, (opciones as any)[name]);
            }

            if (Object.keys(errores).length) {
                formState.isErrors = true;
                return;
            } else {
                formState.isErrors = false;
            }

            cb(values as T);
        };
    }
    function onFocus(key: keyof T) {
        (refs.value as any)[key].focus();
    }
    function clearError(name: keyof T) {
        delete errores[name];
    }
    async function validate(
        name: keyof T,
        options: UseFormOptions<T> & UseFormOptionsFile
    ) {
        clearError(name);
        if (props && props?.resolver) {
            try {
                await props.resolver(name as keyof T, values as any);
            } catch (error) {
                setError(name, {
                    message: (error as Error).message,
                    type: "custom",
                });
            }
            return;
        }
        const {
            required = false,
            max,
            min,
            maxValue,
            minValue,
            pattern,
            types,
            custom,
        } = options;
        const value = (values as any)[name];

        // max
        if (max) {
            if (typeof max === "number") {
                if (typeof value === "string" && value.length > max) {
                    setError(name, {
                        type: "max",
                        message: `Este campo permite máximo ${max} carácteres`,
                    });
                }
                if (
                    typeof value === "number" &&
                    value.toString().length > max
                ) {
                    setError(name, {
                        type: "max",
                        message: `Este campo permite máximo ${max} dígitos`,
                    });
                }
                if (value instanceof FileList && value.length > max) {
                    setError(name, {
                        type: "max",
                        message: `Este campo requiere máximo ${max} archivos`,
                    });
                }
            }
            if (max instanceof Object) {
                if (typeof value === "string" && value.length > max.value) {
                    setError(name, {
                        type: "max",
                        message:
                            max.message ||
                            `Este campo permite máximo ${max.value} carácteres`,
                    });
                }
                if (
                    typeof value === "number" &&
                    value.toString().length > max.value
                ) {
                    setError(name, {
                        type: "max",
                        message:
                            max.message ||
                            `Este campo permite máximo ${max.value} dígitos`,
                    });
                }
                if (value instanceof FileList && value.length > max.value) {
                    setError(name, {
                        type: "max",
                        message:
                            max.message ||
                            `Este campo requiere mámimo ${max.value} de archivos`,
                    });
                }
            }
        }
        // min
        if (min) {
            if (typeof min === "number") {
                if (typeof value === "string" && value.length < min) {
                    setError(name, {
                        type: "min",
                        message: `Este campo permite mínimo ${min} carácteres`,
                    });
                }
                if (
                    typeof value === "number" &&
                    value.toString().length < min
                ) {
                    setError(name, {
                        type: "min",
                        message: `Este campo permite mínimo ${min} dígitos`,
                    });
                }
                if (value instanceof FileList && value.length < min) {
                    setError(name, {
                        type: "min",
                        message: `Este campo permite mínimo ${min} archivos`,
                    });
                }
            }
            if (min instanceof Object) {
                if (typeof value === "string" && value.length < min.value) {
                    setError(name, {
                        type: "min",
                        message:
                            min.message ||
                            `Este campo permite mínimo ${min.value} carácteres`,
                    });
                }
                if (
                    typeof value === "number" &&
                    value.toString().length < min.value
                ) {
                    setError(name, {
                        type: "min",
                        message:
                            min.message ||
                            `Este campo permite mínimo ${min.value} dígitos`,
                    });
                }
                if (value instanceof FileList && value.length < min.value) {
                    setError(name, {
                        type: "min",
                        message:
                            min.message ||
                            `Este campo permite mínimo ${min.value} archivos`,
                    });
                }
            }
        }
        // minvalue
        if (minValue) {
            if (typeof minValue === "number") {
                if (typeof value === "number" && value < minValue) {
                    console.log({ value });
                    setError(name, {
                        type: "minValue",
                        message: `Este campo debe ser mayor a ${minValue}`,
                    });
                }
                if (value instanceof FileList) {
                    for (const file of value) {
                        if (file.size < minValue * 1000000) {
                            setError(name, {
                                type: "minValue",
                                message: `Archivo muy ligero ${file.name.slice(
                                    0,
                                    18
                                )}, mínimo ${minValue} mb`,
                            });
                        }
                    }
                }
            }
            if (minValue instanceof Object) {
                if (typeof value === "number" && value < minValue.value) {
                    setError(name, {
                        type: "minValue",
                        message:
                            minValue.message ||
                            `Este campo debe ser mayor a ${minValue.value}`,
                    });
                }
                if (value instanceof FileList) {
                    for (const file of value) {
                        if (file.size < minValue.value * 1000000) {
                            setError(name, {
                                type: "minValue",
                                message:
                                    minValue.message ||
                                    `Archivo muy ligero ${file.name.slice(
                                        0,
                                        18
                                    )}, mínimo ${minValue.value} mb`,
                            });
                        }
                    }
                }
            }
        }
        // max value
        if (maxValue) {
            if (typeof maxValue === "number") {
                if (typeof value === "number" && value > maxValue) {
                    setError(name, {
                        type: "maxValue",
                        message: `Este campo debe ser menor a ${maxValue}`,
                    });
                }
                if (value instanceof FileList) {
                    for (const file of value) {
                        if (file.size > maxValue * 1000000) {
                            setError(name, {
                                type: "maxValue",
                                message: `Archivo muy pesado ${file.name.slice(
                                    0,
                                    18
                                )}, máximo ${maxValue} mb`,
                            });
                        }
                    }
                }
            }
            if (maxValue instanceof Object) {
                if (typeof value === "number" && value > maxValue.value) {
                    setError(name, {
                        type: "maxValue",
                        message:
                            maxValue.message ||
                            `Este campo debe ser menor a ${maxValue}`,
                    });
                }
                if (value instanceof FileList) {
                    for (const file of value) {
                        if (file.size > maxValue.value * 1000000) {
                            setError(name, {
                                type: "maxValue",
                                message:
                                    maxValue.message ||
                                    `Archivo muy pesado ${file.name.slice(
                                        0,
                                        18
                                    )}, máximo ${maxValue.value} mb`,
                            });
                        }
                    }
                }
            }
        }
        // pattern
        if (pattern && pattern.value && !RegExp(pattern.value).test(value)) {
            setError(name, {
                type: "pattern",
                message: pattern.message,
            });
        }
        if (required) {
            if (typeof value === "string") {
                if (
                    required instanceof Object &&
                    required.value &&
                    !value.length
                ) {
                    setError(name, {
                        type: "required",
                        message:
                            required.message || "Este campo es obligatorio",
                    });
                }
                if (
                    typeof required === "boolean" &&
                    required &&
                    !value.length
                ) {
                    setError(name, {
                        type: "required",
                        message: "Este campo es obligatorio",
                    });
                }
            }
            if (typeof value === "number") {
                if (
                    required instanceof Object &&
                    required.value &&
                    value === 0
                ) {
                    setError(name, {
                        type: "required",
                        message:
                            required.message || "Este campo es obligatorio",
                    });
                }

                if (typeof required === "boolean" && required && value === 0) {
                    setError(name, {
                        type: "required",
                        message: "Este campo es obligatorio",
                    });
                }
            }
            if (value instanceof FileList) {
                if (
                    required instanceof Object &&
                    required.value &&
                    value.length === 0
                ) {
                    setError(name, {
                        type: "required",
                        message:
                            required.message || "Este campo es obligatorio",
                    });
                }
                if (
                    typeof required === "boolean" &&
                    required &&
                    value.length === 0
                ) {
                    setError(name, {
                        type: "required",
                        message: "Este campo es obligatorio",
                    });
                }
            }
            if (value instanceof Array) {
                if (
                    required instanceof Object &&
                    required.value &&
                    value.length === 0
                ) {
                    setError(name, {
                        type: "required",
                        message:
                            required.message || "Este campo es obligatorio",
                    });
                }
                if (
                    typeof required === "boolean" &&
                    required &&
                    value.length === 0
                ) {
                    setError(name, {
                        type: "required",
                        message: "Este campo es obligatorio",
                    });
                }
            }
        }
        if (types) {
            if (value instanceof FileList) {
                for (const file of value) {
                    if (!types.includes(file.type)) {
                        setError(name, {
                            type: "types",
                            message: `Este archivo no tiene un formato válido: ${file.name.slice(
                                0,
                                12
                            )}`,
                        });
                    }
                }
            }
        }
        if (custom) {
            try {
                await custom((values as any)[name], values as T);
            } catch (error) {
                setError(name, { type: "custom", message: error as string });
            }
            return;
        }
    }

    function setValues(dValues: Partial<T>) {
        Object.assign(values, dValues);
    }

    function setValueInput(key: keyof T, value: string) {
        (valuesInput as any)[key] = value;
    }
    function setValue(key: keyof T, value: T[keyof T]) {
        (values as T)[key] = value;
    }

    function setError(
        name: keyof T,
        props:
            | {
                  type: keyof UseFormOptions<T> | keyof UseFormOptionsFile;
                  message: string;
              }
            | string
    ) {
        if (typeof props === "string") {
            (errores as Errores<T>)[name] = {
                type: "custom",
                message: props,
            };
            return;
        }
        (errores as any)[name] = {
            type: props.type,
            message: props.message,
        };
    }
    function setErrors(props: {
        [Key in keyof T]?: string;
    }) {
        for (const [key, value] of Object.entries(props)) {
            setError(key as keyof T, value);
        }
    }

    // getters
    function getValue(key: keyof T): any {
        return (values as T)[key];
    }
    function resetOne(name: keyof T, validation = false) {
        setValue(name as keyof T, (defaultValues as any)[name] || "");
        setValueInput(name, (defaultValues as any)[name] || "");
        if (validation) {
            validate(name as keyof T, (opciones as any)[name]);
        }
    }
    function reset(props?: { validation?: boolean }) {
        const { validation = false } = props || { validation: false };
        for (const [name] of Object.entries(values)) {
            resetOne(name as keyof T, validation);
        }
    }
    return {
        handleSubmit,
        control,
        controlFile,
        opciones,
        reset,
        values,
        errores,
        methods: {
            onFocus,
            setValues,
            setErrors,
            setValue,
            getValue,
            setError,
            resetOne,
            setValueInput,
        },
        formState,
    };
}
export default useForm;
