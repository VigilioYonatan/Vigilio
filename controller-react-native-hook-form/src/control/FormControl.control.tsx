import { useContext } from "react";
import { FormControlContext } from "./FormControl";
import { StyleProp, TextInput, TextStyle } from "react-native";

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
            onChangeText={(value) => properties.onChange(value)}
            style={customError && error ? customError : style}
        />
    );
}
