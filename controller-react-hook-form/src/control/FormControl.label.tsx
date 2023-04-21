import { useContext } from "react";
import { FormControlContext } from "./FormControl";

export function FormControlLabel({ className = "" }: { className?: string }) {
    const { title } = useContext(FormControlContext);
    return <div className={className}>{title}</div>;
}
