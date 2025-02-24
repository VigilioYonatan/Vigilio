import "reflect-metadata";

export class Container {
    private static instances = new Map();

    static provide<T>(token: new (...args: any[]) => T): T {
        if (!this.instances.has(token)) {
            const paramTypes: any[] =
                Reflect.getMetadata("design:paramtypes", token) || [];
            const dependencies = paramTypes.map((param) =>
                Container.provide(param)
            );
            const instance = new token(...dependencies);
            this.instances.set(token, instance);
        }
        return this.instances.get(token);
    }
}
export function Injectable() {
    return (target: any) => {
        Container.provide(target);
    };
}

export function Inject() {
    return (target: any, _: string | symbol, parameterIndex: number) => {
        if (!Reflect.hasMetadata("design:paramtypes", target)) {
            return;
        }
        const paramTypes = Reflect.getMetadata("design:paramtypes", target);
        paramTypes[parameterIndex] = Container.provide(
            paramTypes[parameterIndex]
        );
    };
}
