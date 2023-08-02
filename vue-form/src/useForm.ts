import { onMounted, reactive, ref } from "vue";
import { Control, Errores, UseFormOptions, UseFormProps } from "./types";
import {
    maxLength,
    maxNumber,
    minLength,
    minNumber,
    patternValidate,
    requiredNumber,
    requiredValidate,
} from "./validate";

function useForm<T extends Object>(props?: UseFormProps<T>) {
    const { defaultValues = {}, type = "normal" } = props || {
        defaultValues: {},
        type: "normal",
    };

    const values = reactive<T>({} as T);
    const valuesInput = reactive({} as Record<keyof T, string>);
    const errores = reactive<Errores<T>>({} as Errores<T>);
    const refs = ref<Record<keyof T, any>>({} as Record<keyof T, any>);
    const opciones = reactive<UseFormOptions<T>>({} as UseFormOptions<T>);
    const formState = reactive({
        isSubmmit: false,
        isErrors: false,
    });

    const control: Control<T> = (
        name: keyof T,
        options?: UseFormOptions<T>,
        onChangeCustom?: (e: Event) => any
    ) => {
        const controlRef = ref();
        if ((valuesInput as any)[name] === undefined) {
            setValueInput(name, String((defaultValues as any)[name] || ""));
        }

        if ((values as T)[name] === undefined) {
            let value: any = "" as T[keyof T];
            if ((defaultValues as any)[name]) {
                value = (defaultValues as T)[name];
            }
            if (options?.isNumber) {
                value = Number((defaultValues as any)[name] ?? "");
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

            if (
                options &&
                options.stopValue &&
                (value as string).length > options.stopValue
            ) {
                controlRef.value.value = (valuesInput as any)[name];
                return;
            }

            setValueInput(name, value);
            if (options?.isNumber) {
                value = Number(value ?? "");
            }
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
        async function onChange(e: Event) {
            const val = (e.target as HTMLInputElement).value as string;
            setValueInput(name, val);
            let valor = onChangeCustom!(e);
            setValue(name, valor);
            if (type === "submit" && !formState.isSubmmit) return;
            await validate(name, (opciones as any)[name]);
        }
        async function onBlur(_e: Event) {
            if (type === "blur") {
                await validate(name, (opciones as any)[name]);
            }
        }
        let returnControl: any = {
            id: name,
            name,
            ref: controlRef,
            onBlur,
        };
        if (options && options.value) {
            returnControl["value"] = options.value;
        } else {
            returnControl["value"] = (valuesInput as any)[name];
        }
        if (onChangeCustom) {
            return { ...returnControl, onChange };
        }
        return {
            ...returnControl,
            onInput,
        };
    };

    onMounted(() => {
        if (type !== "initial") return;
        for (const [name, _val] of Object.entries(values)) {
            validate(name as keyof T, (opciones as any)[name]);
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
        delete (errores as any)[name];
    }
    async function validate(name: keyof T, options: UseFormOptions<T>) {
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
            isNumber,
            pattern,
            custom,
        } = options;
        const value = (values as any)[name];
        const resp = requiredValidate(required, value);

        if (resp?.type) {
            setError(name, resp);
            return;
        }
        if (typeof (values as any)[name] === "string") {
            const value = (values as any)[name] as string;
            const respPattern = patternValidate(pattern, value);
            if (respPattern?.type) {
                setError(name, respPattern);
                return;
            }
            const minResp = minLength(min, value);
            if (minResp?.type) {
                setError(name, minResp);
                return;
            }
            const maxResp = maxLength(max, value);
            if (maxResp?.type) {
                setError(name, maxResp);
                return;
            }
        }

        if (typeof (values as any)[name] === "number") {
            const value = (values as any)[name] as number;
            const requiredNum = requiredNumber(isNumber, value);
            if (requiredNum?.type) {
                setError(name, requiredNum);
                return;
            }
            const minResp = minNumber(min, value);
            if (minResp?.type) {
                setError(name, minResp);
                return;
            }
            const maxResp = maxNumber(max, value);
            if (maxResp?.type) {
                setError(name, maxResp);
                return;
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
    function setValue(key: keyof T, value: T[keyof T]) {
        (values as T)[key] = value;
    }
    function setValueInput(key: keyof T, value: string) {
        (valuesInput as any)[key] = value;
    }
    function setError(
        name: keyof T,
        props: { type: keyof UseFormOptions<T>; message: string } | string
    ) {
        if (typeof props === "string") {
            (errores as Errores<T>)[name] = {
                type: "custom",
                message: props,
            };
            return;
        }
        (errores as Errores<T>)[name] = {
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
    function onReset(name: keyof T, clean: boolean = false) {
        if (!clean) {
            setValue(name, (defaultValues as any)[name] || "");
            setValueInput(name, (defaultValues as any)[name] || "");
            return;
        }
        setValue(name, "" as T[keyof T]);
        setValueInput(name, "");
    }

    // getters
    function getValue(key: keyof T): any {
        return (values as T)[key];
    }

    function reset(props?: { validation?: boolean }) {
        const { validation = false } = props || { validation: false };
        for (const [name] of Object.entries(values)) {
            setValue(name as keyof T, (defaultValues as any)[name] || "");
            setValueInput(name as keyof T, (defaultValues as any)[name] || "");
            if (validation) {
                validate(name as keyof T, (opciones as any)[name]);
            }
        }
    }
    return {
        handleSubmit,
        control,
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
            onReset,
        },
        formState,
    };
}
export default useForm;
