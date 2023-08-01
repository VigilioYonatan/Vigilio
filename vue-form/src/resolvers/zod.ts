import { z } from "zod";
export function zodResolver<T extends z.AnyZodObject>(schema: T) {
    return async (name: string, value: any) => {
        const pickSchema = schema.pick({ [name]: true });
        const resol = await pickSchema.safeParseAsync({ [name]: value });
        if (!resol.success) throw resol.error.issues[0];
    };
}
