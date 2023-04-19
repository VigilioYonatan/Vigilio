import { useContext } from "react";
import { FormControlContext } from "./FormControl";
import { StyleProp, Text, TextStyle } from "react-native";

export function FormControlLabel({
    style = {},
    className = "",
}: {
    style?: StyleProp<TextStyle>;
    className?: string;
}) {
    const { title } = useContext(FormControlContext);
    const props = { className };
    return (
        <Text {...props} style={style}>
            {title}
        </Text>
    );
}
