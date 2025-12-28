export class SalePerception {
	private codReg?: string;
	private porcentaje?: number;
	private mtoBase?: number;
	private mto?: number;
	private mtoTotal?: number;

	public getCodReg(): string | undefined {
		return this.codReg;
	}

	public setCodReg(codReg?: string): SalePerception {
		this.codReg = codReg;
		return this;
	}

	public getPorcentaje(): number | undefined {
		return this.porcentaje;
	}

	public setPorcentaje(porcentaje?: number): SalePerception {
		this.porcentaje = porcentaje;
		return this;
	}

	public getMtoBase(): number | undefined {
		return this.mtoBase;
	}

	public setMtoBase(mtoBase?: number): SalePerception {
		this.mtoBase = mtoBase;
		return this;
	}

	public getMto(): number | undefined {
		return this.mto;
	}

	public setMto(mto?: number): SalePerception {
		this.mto = mto;
		return this;
	}

	public getMtoTotal(): number | undefined {
		return this.mtoTotal;
	}

	public setMtoTotal(mtoTotal?: number): SalePerception {
		this.mtoTotal = mtoTotal;
		return this;
	}
}
