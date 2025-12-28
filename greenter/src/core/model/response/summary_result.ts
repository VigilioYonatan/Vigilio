import { BaseResult } from "./base_result";

export class SummaryResult extends BaseResult {
	protected ticket?: string;

	public getTicket(): string | undefined {
		return this.ticket;
	}

	public setTicket(ticket?: string): this {
		this.ticket = ticket;
		return this;
	}
}
