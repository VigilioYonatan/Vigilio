export class Charge {
	private codTipo?: string;
	private factor?: number;
	private monto?: number;
	private montoBase?: number;

	public getCodTipo(): string | undefined {
		return this.codTipo;
	}

	public setCodTipo(codTipo?: string): Charge {
		this.codTipo = codTipo;
		return this;
	}

	public getFactor(): number | undefined {
		return this.factor;
	}

	public setFactor(factor?: number): Charge {
		this.factor = factor;
		return this;
	}

	public getMonto(): number | undefined {
		return this.monto;
	}

	public setMonto(monto?: number): Charge {
		this.monto = monto;
		return this;
	}

	public getMontoBase(): number | undefined {
		return this.montoBase;
	}

	public setMontoBase(montoBase?: number): Charge {
		this.montoBase = montoBase;
		return this;
	}
}
