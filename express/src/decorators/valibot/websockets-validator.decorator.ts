import { ObjectSchemaAsync } from "@vigilio/valibot";
import { validator } from "./validator";
export function IoValidator(schema: ObjectSchemaAsync<any>) {
    return async (io, _socket, args, next: () => void) => {
        const body = args as { data: any; event: string };
        const data = await validator(schema, body.data);
        if (!data.success) {
            io.emit(`${body.event}:errors`, data);
            return;
        }
        next();
    };
}
export function SocketValidator(schema: ObjectSchemaAsync<any>) {
    return async (_io, socket, args, next: () => void) => {
        const body = args as { data: any; event: string };
        const data = await validator(schema, body.data);
        if (!data.success) {
            socket.emit(`${body.event}:errors`, data);
            return;
        }
        next();
    };
}
