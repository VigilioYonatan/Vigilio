import type { DateTimeInterface } from "../../interfaces/date_time_interface";

export class BasicToken {
	private value?: string;
	private expire?: DateTimeInterface;

	constructor(value?: string, expire?: DateTimeInterface) {
		this.value = value;
		this.expire = expire;
	}

	public getValue(): string | undefined {
		return this.value;
	}

	public setValue(value: string | undefined): BasicToken {
		this.value = value;
		return this;
	}

	public getExpire(): DateTimeInterface | undefined {
		return this.expire;
	}

	public setExpire(expire: DateTimeInterface | undefined): BasicToken {
		this.expire = expire;
		return this;
	}
}
