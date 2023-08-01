import { type ObjectSchema, pick, parseAsync } from "valibot";
function valibotResolver(schema: ObjectSchema<any>) {
    return async (name: string, value: any) => {
        const pickSchema = pick(schema, [name]);
        const err = await parseAsync(pickSchema, { [name]: value });

        throw err;
    };
}
export default valibotResolver;
