export class AdditionalDoc {
	private tipoDesc?: string;
	private tipo?: string;
	private nro?: string;
	private emisor?: string;

	public getTipoDesc(): string | undefined {
		return this.tipoDesc;
	}

	public setTipoDesc(tipoDesc?: string): AdditionalDoc {
		this.tipoDesc = tipoDesc;
		return this;
	}

	public getTipo(): string | undefined {
		return this.tipo;
	}

	public setTipo(tipo?: string): AdditionalDoc {
		this.tipo = tipo;
		return this;
	}

	public getNro(): string | undefined {
		return this.nro;
	}

	public setNro(nro?: string): AdditionalDoc {
		this.nro = nro;
		return this;
	}

	public getEmisor(): string | undefined {
		return this.emisor;
	}

	public setEmisor(emisor?: string): AdditionalDoc {
		this.emisor = emisor;
		return this;
	}
}
