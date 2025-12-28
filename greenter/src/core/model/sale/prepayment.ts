export class Prepayment {
	private tipoDocRel?: string;
	private nroDocRel?: string;
	private total?: number;

	public getTipoDocRel(): string | undefined {
		return this.tipoDocRel;
	}

	public setTipoDocRel(tipoDocRel?: string): Prepayment {
		this.tipoDocRel = tipoDocRel;
		return this;
	}

	public getNroDocRel(): string | undefined {
		return this.nroDocRel;
	}

	public setNroDocRel(nroDocRel?: string): Prepayment {
		this.nroDocRel = nroDocRel;
		return this;
	}

	public getTotal(): number | undefined {
		return this.total;
	}

	public setTotal(total?: number): Prepayment {
		this.total = total;
		return this;
	}
}
