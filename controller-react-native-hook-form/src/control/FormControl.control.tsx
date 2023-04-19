import { useContext } from "react";
import { FormControlContext } from "./FormControl";
import { StyleProp, TextInput, TextInputProps, TextStyle } from "react-native";
import { chooseValueKeyboard } from "../helpers/chooseValue";

type FormControlControlProps = {
    style?: StyleProp<TextStyle>;
    customError?: StyleProp<TextStyle>;
};

export function FormControlControl({
    style = {},
    customError = {},
}: FormControlControlProps) {
    const { properties, error } = useContext(FormControlContext);

    return (
        <TextInput
            {...properties}
            onChangeText={(value) =>
                properties.onChange(chooseValueKeyboard(properties, value))
            }
            style={customError && error ? customError : style}
        />
    );
}
