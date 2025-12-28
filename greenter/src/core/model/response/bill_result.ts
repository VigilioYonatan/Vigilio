import { BaseResult } from "./base_result";
import type { CdrResponse } from "./cdr_response";

export class BillResult extends BaseResult {
	protected cdrZip?: string;
	protected cdrResponse?: CdrResponse;

	public getCdrZip(): string | undefined {
		return this.cdrZip;
	}

	public setCdrZip(cdrZip?: string): this {
		this.cdrZip = cdrZip;
		return this;
	}

	public getCdrResponse(): CdrResponse | undefined {
		return this.cdrResponse;
	}

	public setCdrResponse(cdrResponse: CdrResponse | undefined): this {
		this.cdrResponse = cdrResponse;
		return this;
	}
}
