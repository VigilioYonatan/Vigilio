export class Transportist {
	private tipoDoc?: string;
	private numDoc?: string;
	private rznSocial?: string;
	private nroMtc?: string;
	private placa?: string;
	private choferTipoDoc?: string;
	private choferDoc?: string;

	public getTipoDoc(): string | undefined {
		return this.tipoDoc;
	}

	public setTipoDoc(tipoDoc?: string): Transportist {
		this.tipoDoc = tipoDoc;
		return this;
	}

	public getNumDoc(): string | undefined {
		return this.numDoc;
	}

	public setNumDoc(numDoc?: string): Transportist {
		this.numDoc = numDoc;
		return this;
	}

	public getRznSocial(): string | undefined {
		return this.rznSocial;
	}

	public setRznSocial(rznSocial?: string): Transportist {
		this.rznSocial = rznSocial;
		return this;
	}

	public getNroMtc(): string | undefined {
		return this.nroMtc;
	}

	public setNroMtc(nroMtc?: string): Transportist {
		this.nroMtc = nroMtc;
		return this;
	}

	public getPlaca(): string | undefined {
		return this.placa;
	}

	public setPlaca(placa?: string): Transportist {
		this.placa = placa;
		return this;
	}

	public getChoferTipoDoc(): string | undefined {
		return this.choferTipoDoc;
	}

	public setChoferTipoDoc(choferTipoDoc?: string): Transportist {
		this.choferTipoDoc = choferTipoDoc;
		return this;
	}

	public getChoferDoc(): string | undefined {
		return this.choferDoc;
	}

	public setChoferDoc(choferDoc?: string): Transportist {
		this.choferDoc = choferDoc;
		return this;
	}
}
