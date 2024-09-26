import { useContext } from "react";
import { FormControlContext } from "./FormControl";

export function FormControlError({ className = "" }: { className?: string }) {
    const { error } = useContext(FormControlContext);
    return <>{error ? <p className={className}>{error.message}</p> : null}</>;
}
