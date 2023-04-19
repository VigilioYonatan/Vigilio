import { ControllerRenderProps } from "react-hook-form";
import { FormControlsProps } from "../control/types";

export function chooseValueKeyboard(
    properties: Omit<FormControlsProps<object>, "rules" | "title"> & {
        id: string;
    } & ControllerRenderProps<object, never>,
    value: string | number
) {
    switch (properties.keyboardType) {
        case "numeric":
            value = +value;
            break;
        case "number-pad":
            value = +value;
            break;
        case "decimal-pad":
            value = +value;
            break;
        default:
            break;
    }

    return value;
}
