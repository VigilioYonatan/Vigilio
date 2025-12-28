import { BillResult } from "./bill_result";

export class StatusResult extends BillResult {
	protected code?: string;

	public getCode(): string | undefined {
		return this.code;
	}

	public setCode(code?: string): this {
		this.code = code;
		return this;
	}
}
