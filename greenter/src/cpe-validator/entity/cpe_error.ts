export class CpeError {
	private code?: string;
	private message?: string;
	private level?: string;
	private nodePath?: string;
	private nodeValue?: string;

	public getCode(): string | undefined {
		return this.code;
	}

	public setCode(code: string | undefined): CpeError {
		this.code = code;
		return this;
	}

	public getMessage(): string | undefined {
		return this.message;
	}

	public setMessage(message: string | undefined): CpeError {
		this.message = message;
		return this;
	}

	public getLevel(): string | undefined {
		return this.level;
	}

	public setLevel(level: string | undefined): CpeError {
		this.level = level;
		return this;
	}

	public getNodePath(): string | undefined {
		return this.nodePath;
	}

	public setNodePath(nodePath: string | undefined): CpeError {
		this.nodePath = nodePath;
		return this;
	}

	public getNodeValue(): string | undefined {
		return this.nodeValue;
	}

	public setNodeValue(nodeValue: string | undefined): CpeError {
		this.nodeValue = nodeValue;
		return this;
	}
}
