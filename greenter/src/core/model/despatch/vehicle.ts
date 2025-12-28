export class Vehicle {
	private placa?: string;
	private nroCirculacion?: string;
	private codEmisor?: string;
	private nroAutorizacion?: string;
	private secundarios?: Vehicle[];

	public getPlaca(): string | undefined {
		return this.placa;
	}

	public setPlaca(placa?: string): Vehicle {
		this.placa = placa;
		return this;
	}

	public getNroCirculacion(): string | undefined {
		return this.nroCirculacion;
	}

	public setNroCirculacion(nroCirculacion?: string): Vehicle {
		this.nroCirculacion = nroCirculacion;
		return this;
	}

	public getCodEmisor(): string | undefined {
		return this.codEmisor;
	}

	public setCodEmisor(codEmisor?: string): Vehicle {
		this.codEmisor = codEmisor;
		return this;
	}

	public getNroAutorizacion(): string | undefined {
		return this.nroAutorizacion;
	}

	public setNroAutorizacion(nroAutorizacion?: string): Vehicle {
		this.nroAutorizacion = nroAutorizacion;
		return this;
	}

	public getSecundarios(): Vehicle[] | undefined {
		return this.secundarios;
	}

	public setSecundarios(secundarios: Vehicle[] | undefined): Vehicle {
		this.secundarios = secundarios;
		return this;
	}
}
