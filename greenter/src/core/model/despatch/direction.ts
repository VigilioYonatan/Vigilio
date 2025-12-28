export class Direction {
	private ubigueo?: string;
	private direccion?: string;
	private codLocal?: string;
	private ruc?: string;

	constructor(ubigueo?: string, direccion?: string) {
		this.ubigueo = ubigueo;
		this.direccion = direccion;
	}

	public getUbigueo(): string | undefined {
		return this.ubigueo;
	}

	public setUbigueo(ubigueo?: string): Direction {
		this.ubigueo = ubigueo;
		return this;
	}

	public getDireccion(): string | undefined {
		return this.direccion;
	}

	public setDireccion(direccion?: string): Direction {
		this.direccion = direccion;
		return this;
	}

	public getCodLocal(): string | undefined {
		return this.codLocal;
	}

	public setCodLocal(codLocal?: string): Direction {
		this.codLocal = codLocal;
		return this;
	}

	public getRuc(): string | undefined {
		return this.ruc;
	}

	public setRuc(ruc?: string): Direction {
		this.ruc = ruc;
		return this;
	}
}
