export class CdrResponse {
	protected id?: string;
	protected code?: string;
	protected description?: string;
	protected notes?: string[];
	protected reference?: string;

	public getId(): string | undefined {
		return this.id;
	}

	public setId(id?: string): CdrResponse {
		this.id = id;
		return this;
	}

	public getCode(): string | undefined {
		return this.code;
	}

	public setCode(code?: string): CdrResponse {
		this.code = code;
		return this;
	}

	public getDescription(): string | undefined {
		return this.description;
	}

	public setDescription(description?: string): CdrResponse {
		this.description = description;
		return this;
	}

	public getNotes(): string[] | undefined {
		return this.notes;
	}

	public setNotes(notes: string[] | undefined): CdrResponse {
		this.notes = notes;
		return this;
	}

	public getReference(): string | undefined {
		return this.reference;
	}

	public setReference(reference?: string): CdrResponse {
		this.reference = reference;
		return this;
	}

	public isAccepted(): boolean {
		const code = parseInt(this.getCode() || "0");
		return code === 0 || code >= 4000;
	}
}
