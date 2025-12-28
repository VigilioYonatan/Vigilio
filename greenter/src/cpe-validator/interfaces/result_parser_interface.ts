import type { CpeError } from "../entity/cpe_error";

export interface ResultParserInterface {
	parse(raw: string | null): CpeError | null;
}
