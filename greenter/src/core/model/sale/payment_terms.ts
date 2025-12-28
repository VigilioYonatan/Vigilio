export class PaymentTerms {
	protected moneda?: string;
	protected tipo?: string;
	protected monto?: number;

	public getMoneda(): string | undefined {
		return this.moneda;
	}

	public setMoneda(moneda?: string): this {
		this.moneda = moneda;
		return this;
	}

	public getTipo(): string | undefined {
		return this.tipo;
	}

	public setTipo(tipo?: string): this {
		this.tipo = tipo;
		return this;
	}

	public getMonto(): number | undefined {
		return this.monto;
	}

	public setMonto(monto?: number): this {
		this.monto = monto;
		return this;
	}
}
