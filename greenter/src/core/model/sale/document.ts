export class Document {
	private tipoDoc?: string;
	private nroDoc?: string;

	public getTipoDoc(): string | undefined {
		return this.tipoDoc;
	}

	public setTipoDoc(tipoDoc?: string): Document {
		this.tipoDoc = tipoDoc;
		return this;
	}

	public getNroDoc(): string | undefined {
		return this.nroDoc;
	}

	public setNroDoc(nroDoc?: string): Document {
		this.nroDoc = nroDoc;
		return this;
	}
}
