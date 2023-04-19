import {
    Control,
    ControllerFieldState,
    Path,
    RegisterOptions,
    UseFormStateReturn,
    ControllerRenderProps,
} from "react-hook-form";
import { TextInputProps } from "react-native";

export type FormControlsProps<T extends object> = {
    name: Path<T>;
    title: string;
    rules?: RegisterOptions;
    transformer?: (value: string) => any;
    // type: InputHTMLAttributes<HTMLInputElement>['type'];
} & TextInputProps;
export type FormControlsCustom<T extends object> = {
    [a in keyof T]: FormControlsProps<T>;
};

/* Props formControls Component */
type FormControlProps<T extends object> = {
    control: Control<T, any>;
};

type RenderProps<T extends object> = ControllerFieldState &
    UseFormStateReturn<T>;

export type FormControlPropsTotal<T extends object> = {
    renderMethods: RenderProps<T>;
} & {
    props: Omit<FormControlsProps<T>, "rules" | "title"> & {
        id: string;
    } & ControllerRenderProps<T, Path<T>>;
};

export type FormControlComponent<T extends object> = FormControlProps<T> &
    FormControlsProps<T>;
