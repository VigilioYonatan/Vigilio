import { useContext } from "react";
import { FormControlContext } from "./FormControl";

export function FormControlLabel({ className = "" }: { className?: string }) {
    const { title, properties } = useContext(FormControlContext);
    return (
        <label className={className} htmlFor={properties.id}>
            {title}
        </label>
    );
}
