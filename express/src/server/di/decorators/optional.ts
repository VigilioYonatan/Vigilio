import { Type } from "../types";
import { Store } from "../store";

/**
 * Type of the Optional metadata.
 *
 * @export
 */
export function Optional(): any {
    return function (target: Type, _key: string | symbol, index: number): void {
        Store.provider(target, { index, optional: true });
    };
}
