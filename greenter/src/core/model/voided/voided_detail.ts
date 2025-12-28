export class VoidedDetail {
	private tipoDoc?: string;
	private serie?: string;
	private correlativo?: string;
	private desMotivoBaja?: string;

	public getTipoDoc(): string | undefined {
		return this.tipoDoc;
	}

	public setTipoDoc(tipoDoc: string | undefined): VoidedDetail {
		this.tipoDoc = tipoDoc;
		return this;
	}

	public getSerie(): string | undefined {
		return this.serie;
	}

	public setSerie(serie: string | undefined): VoidedDetail {
		this.serie = serie;
		return this;
	}

	public getCorrelativo(): string | undefined {
		return this.correlativo;
	}

	public setCorrelativo(correlativo: string | undefined): VoidedDetail {
		this.correlativo = correlativo;
		return this;
	}

	public getDesMotivoBaja(): string | undefined {
		return this.desMotivoBaja;
	}

	public setDesMotivoBaja(desMotivoBaja: string | undefined): VoidedDetail {
		this.desMotivoBaja = desMotivoBaja;
		return this;
	}
}
