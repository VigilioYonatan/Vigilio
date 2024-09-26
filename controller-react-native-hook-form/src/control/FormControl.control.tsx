import { useContext } from "react";
import { FormControlContext } from "./FormControl";
import { StyleProp, TextInput, TextStyle } from "react-native";

type FormControlControlProps = {
    style?: StyleProp<TextStyle>;
    customError?: StyleProp<TextStyle>;
    className?: string;
};

export function FormControlControl({
    style = {},
    className = "",
    customError = {},
}: FormControlControlProps) {
    const { properties, error } = useContext(FormControlContext);
    const { value, onChange, id, transformer, ...rest } = properties;
    return (
        <TextInput
            {...rest}
            className={className}
            value={(value as string).toString()}
            onChangeText={(value) =>
                onChange(transformer ? transformer(value) : value)
            }
            style={customError && error ? customError : style}
        />
    );
}
