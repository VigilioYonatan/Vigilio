import { useContext } from "react";
import { FormControlContext } from "./FormControl";
import { StyleProp, Text, TextStyle } from "react-native";

export function FormControlError({
    style = {},
}: {
    style?: StyleProp<TextStyle>;
}) {
    const { error } = useContext(FormControlContext);

    return <Text style={style}>{error && error.message}</Text>;
}
