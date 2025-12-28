import type { BasicToken } from "./basic_token";

export interface TokenStoreInterface {
	get(id?: string): BasicToken | null;
	set(id: string | null, token: BasicToken): void;
}
