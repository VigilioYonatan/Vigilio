import { ValiError } from "valibot";
export function getPipeIssues<T extends object>(
    input: T,
    key: keyof T,
    message: string,
    validation = "custom"
) {
    return new ValiError([
        {
            reason: "date",
            validation,
            origin: "value",
            message,
            input: input[key],
            path: [
                {
                    schema: "object",
                    input: input,
                    key: key as string,
                    value: input[key],
                },
            ],
        },
    ]);
}
