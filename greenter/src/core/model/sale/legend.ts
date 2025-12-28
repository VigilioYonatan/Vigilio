export class Legend {
	private code?: string;
	private value?: string;

	public getCode(): string | undefined {
		return this.code;
	}

	public setCode(code?: string): Legend {
		this.code = code;
		return this;
	}

	public getValue(): string | undefined {
		return this.value;
	}

	public setValue(value?: string): Legend {
		this.value = value;
		return this;
	}
}
