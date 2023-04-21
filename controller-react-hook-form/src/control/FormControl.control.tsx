import { useContext } from "react";
import { FormControlContext } from "./FormControl";

type FormControlControlProps = {
    customError?: string;
    className?: string;
};

export function FormControlControl({
    className = "",
    customError = "",
}: FormControlControlProps) {
    const { properties, error } = useContext(FormControlContext);
    const { value, onChange, transformer, ...rest } = properties;
    return (
        <input
            {...rest}
            className={className + " " + error ? customError : ""}
            value={(value as string).toString()}
            onChange={(e) =>
                onChange(
                    transformer ? transformer(e.target.value) : e.target.value
                )
            }
        />
    );
}
