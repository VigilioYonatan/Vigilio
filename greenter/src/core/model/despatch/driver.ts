export class Driver {
	private tipo?: string;
	private tipoDoc?: string;
	private nroDoc?: string;
	private nombres?: string;
	private apellidos?: string;
	private licencia?: string;

	public getTipo(): string | undefined {
		return this.tipo;
	}

	public setTipo(tipo?: string): Driver {
		this.tipo = tipo;
		return this;
	}

	public getTipoDoc(): string | undefined {
		return this.tipoDoc;
	}

	public setTipoDoc(tipoDoc?: string): Driver {
		this.tipoDoc = tipoDoc;
		return this;
	}

	public getNroDoc(): string | undefined {
		return this.nroDoc;
	}

	public setNroDoc(nroDoc?: string): Driver {
		this.nroDoc = nroDoc;
		return this;
	}

	public getNombres(): string | undefined {
		return this.nombres;
	}

	public setNombres(nombres?: string): Driver {
		this.nombres = nombres;
		return this;
	}

	public getApellidos(): string | undefined {
		return this.apellidos;
	}

	public setApellidos(apellidos?: string): Driver {
		this.apellidos = apellidos;
		return this;
	}

	public getLicencia(): string | undefined {
		return this.licencia;
	}

	public setLicencia(licencia?: string): Driver {
		this.licencia = licencia;
		return this;
	}
}
