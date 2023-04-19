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
    customError = {},
    className = "",
}: FormControlControlProps) {
    const { properties, error } = useContext(FormControlContext);
    const { value, onChange, id, transformer, ...rest } = properties;
    (rest as any).className = className;
    return (
        <TextInput
            {...rest}
            value={(value as string).toString()}
            onChangeText={(value) =>
                onChange(transformer ? transformer(value) : value)
            }
            style={customError && error ? customError : style}
        />
    );
}
