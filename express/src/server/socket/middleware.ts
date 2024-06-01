import { Container, InjectionToken } from "../di";
import SocketIO from "socket.io";
import { Type } from "../di/types";
/**
 * IO Middleware class registration DI token
 */
export const IO_MIDDLEWARE = new InjectionToken("IO_MIDDLEWARE");

export type NextFunction = (err?: Error) => void;

/**
 * Server Middleware class interface
 *
 * @export
 * @interface ServerMiddleware
 */
export interface ServerMiddleware {
    use(
        io: SocketIO.Server | SocketIO.Namespace,
        socket: SocketIO.Socket,
        next: NextFunction
    ): void;
}

/**
 * Middleware class interface
 *
 * @export
 * @interface SocketMiddleware
 */
export interface SocketMiddleware {
    use(
        io: SocketIO.Server | SocketIO.Namespace,
        socket: SocketIO.Socket,
        args: any,
        next: NextFunction
    ): void;
}

/**
 * Create request middleware handler that uses class or function provided as middleware
 *
 * @export
 * @param {Type | InjectionToken} middleware
 *
 * @returns {RequestHandler}
 */
export function middlewareSocketHandler(middleware: Type | InjectionToken) {
    return function (...args: any[]): any {
        const next: NextFunction = args[args.length - 1];
        let instance: SocketMiddleware | ServerMiddleware | Type;

        try {
            instance = Container.get(middleware);
        } catch {
            try {
                instance = new (middleware as Type)();
            } catch {
                instance = middleware as any;
            }
        }

        // first, assuming that middleware is a class, try to use it,
        // otherwise use it as a function
        const use = (instance as SocketMiddleware | ServerMiddleware).use
            ? (instance as SocketMiddleware | ServerMiddleware).use
            : (instance as Type);

        try {
            const result = use.apply(instance, args);

            // if result of execution is a promise, add additional listener to catch error
            if (result instanceof Promise) {
                result.catch(next);
            }

            return result;
        } catch (e) {
            return next(e);
        }
    };
}

export function executeMiddleware(
    middleware: Type[],
    args: any[] = []
): Promise<void> {
    function iteratee(done: (err: Error) => void, i = 0) {
        try {
            middlewareSocketHandler(middleware[i])(...args, (err) => {
                if (err) {
                    return done(err);
                }

                if (i === middleware.length - 1) {
                    return done(null);
                }

                iteratee(done, ++i);
            });
        } catch (e) {
            done(e);
        }
    }

    return new Promise((resolve, reject) => {
        if (middleware === undefined || middleware.length === 0) {
            return resolve();
        }

        iteratee((err: Error) => (err ? reject(err) : resolve()));
    });
}
