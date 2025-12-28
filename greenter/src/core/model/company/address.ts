export class Address {
	private ubigueo?: string;
	private codigoPais?: string = "PE";
	private departamento?: string;
	private provincia?: string;
	private distrito?: string;
	private urbanizacion?: string;
	private direccion?: string;
	private codLocal?: string = "0000";

	public getUbigueo(): string | undefined {
		return this.ubigueo;
	}

	public setUbigueo(ubigueo?: string): Address {
		this.ubigueo = ubigueo;
		return this;
	}

	public getCodigoPais(): string | undefined {
		return this.codigoPais;
	}

	public setCodigoPais(codigoPais?: string): Address {
		this.codigoPais = codigoPais;
		return this;
	}

	public getDepartamento(): string | undefined {
		return this.departamento;
	}

	public setDepartamento(departamento?: string): Address {
		this.departamento = departamento;
		return this;
	}

	public getProvincia(): string | undefined {
		return this.provincia;
	}

	public setProvincia(provincia?: string): Address {
		this.provincia = provincia;
		return this;
	}

	public getDistrito(): string | undefined {
		return this.distrito;
	}

	public setDistrito(distrito?: string): Address {
		this.distrito = distrito;
		return this;
	}

	public getUrbanizacion(): string | undefined {
		return this.urbanizacion;
	}

	public setUrbanizacion(urbanizacion?: string): Address {
		this.urbanizacion = urbanizacion;
		return this;
	}

	public getDireccion(): string | undefined {
		return this.direccion;
	}

	public setDireccion(direccion?: string): Address {
		this.direccion = direccion;
		return this;
	}

	public getCodLocal(): string | undefined {
		return this.codLocal;
	}

	public setCodLocal(codLocal?: string): Address {
		this.codLocal = codLocal;
		return this;
	}
}
