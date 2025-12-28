import { BillResult } from "./bill_result";

export class StatusCdrResult extends BillResult {
	private code?: string;
	private message?: string;

	public getCode(): string | undefined {
		return this.code;
	}

	public setCode(code?: string): this {
		this.code = code;
		return this;
	}

	public getMessage(): string | undefined {
		return this.message;
	}

	public setMessage(message?: string): this {
		this.message = message;
		return this;
	}
}
