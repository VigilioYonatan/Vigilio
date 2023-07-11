export interface UseFormProps<T> {
    defaultValues?: Partial<{
        [Key in keyof T]: T[Key];
    }>;
    type?: "normal" | "blur" | "initial" | "submit";
}
export type Control<T extends object> = (
    name: keyof T,
    options?: UseFormOptions<T>,
    onChangeInput?: (e: Event) => any
) => void;

export interface UseFormOptions<T> {
    required?: boolean | { value: true; message: string };
    isNumber?: boolean | { value: true; message: string };
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
    stopValue?: number;
    value?: string;
    isArray?: boolean;
}
export type Errores<T> = Record<
    keyof T,
    { type: keyof UseFormOptions<T>; message: string }
>;
