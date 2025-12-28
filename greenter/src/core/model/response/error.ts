export class ErrorCustom {
	protected code?: string;
	protected message?: string;

	constructor(code?: string, message?: string) {
		this.code = code;
		this.message = message;
	}

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
