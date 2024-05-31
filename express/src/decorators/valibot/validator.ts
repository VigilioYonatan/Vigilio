import { safeParseAsync, ObjectSchemaAsync } from "valibot";
export async function validator(schema: ObjectSchemaAsync<any>, body: any) {
    const data = await safeParseAsync(schema, body);
    if (!data.success) {
        const errors = {
            success: false,
            message: (data as any).issues[0].message,
            body: (data as any).issues[0].path
                ? (data as any).issues[0].path[0].key
                : (data as any).issues[0].validation,
        };

        return errors;
    }
    return {
        success: true,
        data,
    };
}
