import { Ref, type UnwrapNestedRefs } from "vue";
export interface UseFormProps<T> {
    defaultValues?: Partial<{
        [Key in keyof T]: T[Key];
    }>;
    type?: "normal" | "blur" | "initial" | "submit";
    resolver?: (name: keyof T, value: any) => Promise<void>;
}
export type Control<T extends object> = (
    name: keyof T,
    options?: UseFormOptions<T>
) => {
    id: string;
    name: string;
    ref: Ref;
    onBlur: (e: Event) => void;
    value: string;
    onInput: (e: Event) => void;
};
export type ControlFile<T extends object> = (
    name: keyof T,
    options?: UseFormOptionsFile
) => {
    id: string;
    name: string;
    ref: Ref;
    onBlur: (e: Event) => void;
    onChange: (e: Event) => void;
};

export interface UseFormOptions<T> {
    required?: boolean | { value: true; message: string };
    min?:
        | {
              value: number;
              message?: string;
          }
        | number;
    max?:
        | {
              value: number;
              message?: string;
          }
        | number;
    pattern?: {
        value: string | RegExp;
        message: string;
    };
    custom?:
        | ((value: any, values: T) => Promise<true | never>)
        | ((value: any, values: T) => true | never);
    transformValue?: (value: string) => any;
    value?: string;
    isArray?: boolean;
    minValue?:
        | {
              value: number;
              message?: string;
          }
        | number;
    maxValue?:
        | {
              value: number;
              message?: string;
          }
        | number;
    onChange?: (value: T[keyof T]) => void;
}

export interface UseFormOptionsFile {
    required?: boolean | { value: true; message: string };
    min?:
        | {
              value: number;
              message?: string;
          }
        | number;
    max?:
        | {
              value: number;
              message?: string;
          }
        | number;
    minValue?:
        | {
              value: number;
              message?: string;
          }
        | number;
    maxValue?:
        | {
              value: number;
              message?: string;
          }
        | number;
    types: string[];
    onChange?: (file: File[]) => void;
}
export type Errores<T> = Record<
    keyof T,
    { type: keyof UseFormOptions<T>; message: string }
>;

export interface UseForm<T extends Object> {
    handleSubmit: (cb: (data: T) => void) => (e: Event) => Promise<void>;
    control: Control<T>;
    controlFile: ControlFile<T>;
    opciones: UseFormOptions<T>;
    reset: (validation?: boolean) => void;
    values: UnwrapNestedRefs<T>;
    errores: Errores<T>;
    methods: {
        onFocus: (key: keyof T) => void;
        setValues: (dValues: Partial<T>) => void;
        setErrors: (props: { [Key in keyof T]?: string }) => void;
        setValue: (key: keyof T, value: T[keyof T]) => void;
        getValue: (key: keyof T) => T[keyof T];
        setError: (
            name: keyof T,
            props:
                | string
                | {
                      type: keyof UseFormOptions<T> | keyof UseFormOptionsFile;
                      message: string;
                  }
        ) => void;
        resetOne: (name: keyof T, validation?: boolean) => void;
        setValueInput: (key: keyof T, value: string) => void;
    };
    formState: {
        isSubmmit: boolean;
        isErrors: boolean;
    };
}
