import type { BaseResult } from "../model/response/base_result";

export interface SenderInterface {
	send(filename?: string | null, content?: string | null): BaseResult | null;
}
