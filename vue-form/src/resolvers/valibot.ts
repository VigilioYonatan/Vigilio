import { type ObjectSchema, safeParseAsync, type ObjectShape } from "valibot";
function valibotResolver<T extends ObjectShape>(schema: ObjectSchema<T>) {
    return async (name: keyof T, values: any) => {
        const data = await safeParseAsync(schema, values);
        if (!data.success) {
            const error = data.error.issues.filter(
                (err) => err.path![0].key === name
            );
            if (!error.length) return;
            throw new Error(error[0].message);
        }
    };
}
export default valibotResolver;
