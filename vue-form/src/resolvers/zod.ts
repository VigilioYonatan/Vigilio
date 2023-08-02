import { z } from "zod";
function zodResolver<T extends z.ZodType>(schema: T) {
    return async (name: string, value: any) => {
        const resol = await schema.safeParseAsync(value);
        if (!resol.success) {
            const error = resol.error.errors.filter((err) => {
                return err.path[0] === name;
            });
            if (!error.length) return;
            throw new Error(error[0].message);
        }
    };
}

export default zodResolver;
