import { useContext } from "react";
import { FormControlContext } from "./FormControl";
import { StyleProp, Text, TextStyle } from "react-native";

export function FormControlLabel({
    style = {},
}: {
    style?: StyleProp<TextStyle>;
}) {
    const { title } = useContext(FormControlContext);

    return <Text style={style}>{title}</Text>;
}
