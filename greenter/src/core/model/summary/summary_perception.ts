export class SummaryPerception {
	private codReg?: string;
	private tasa?: number;
	private mtoBase?: number;
	private mto?: number;
	private mtoTotal?: number;

	public getCodReg(): string | undefined {
		return this.codReg;
	}

	public setCodReg(codReg: string | undefined): SummaryPerception {
		this.codReg = codReg;
		return this;
	}

	public getTasa(): number | undefined {
		return this.tasa;
	}

	public setTasa(tasa: number | undefined): SummaryPerception {
		this.tasa = tasa;
		return this;
	}

	public getMtoBase(): number | undefined {
		return this.mtoBase;
	}

	public setMtoBase(mtoBase: number | undefined): SummaryPerception {
		this.mtoBase = mtoBase;
		return this;
	}

	public getMto(): number | undefined {
		return this.mto;
	}

	public setMto(mto: number | undefined): SummaryPerception {
		this.mto = mto;
		return this;
	}

	public getMtoTotal(): number | undefined {
		return this.mtoTotal;
	}

	public setMtoTotal(mtoTotal: number | undefined): SummaryPerception {
		this.mtoTotal = mtoTotal;
		return this;
	}
}
