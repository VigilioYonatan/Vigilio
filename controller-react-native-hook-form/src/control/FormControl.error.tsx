import { useContext } from "react";
import { FormControlContext } from "./FormControl";
import { StyleProp, Text, TextStyle } from "react-native";

export function FormControlError({
    style = {},
    className = "",
}: {
    style?: StyleProp<TextStyle>;
    className?: string;
}) {
    const { error } = useContext(FormControlContext);
    return (
        <Text className={className} style={style}>
            {error && error.message}
        </Text>
    );
}
