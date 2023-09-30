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
) => void;

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
}
export type Errores<T> = Record<
    keyof T,
    { type: keyof UseFormOptions<T>; message: string }
>;
