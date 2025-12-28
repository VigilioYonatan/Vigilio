export class Detraction {
	private percent?: number;
	private mount?: number;
	private ctaBanco?: string;
	private codMedioPago?: string;
	private codBienDetraccion?: string;
	private valueRef?: number;

	public getPercent(): number | undefined {
		return this.percent;
	}

	public setPercent(percent: number | undefined): Detraction {
		this.percent = percent;
		return this;
	}

	public getMount(): number | undefined {
		return this.mount;
	}

	public setMount(mount: number | undefined): Detraction {
		this.mount = mount;
		return this;
	}

	public getCtaBanco(): string | undefined {
		return this.ctaBanco;
	}

	public setCtaBanco(ctaBanco: string | undefined): Detraction {
		this.ctaBanco = ctaBanco;
		return this;
	}

	public getCodMedioPago(): string | undefined {
		return this.codMedioPago;
	}

	public setCodMedioPago(codMedioPago: string | undefined): Detraction {
		this.codMedioPago = codMedioPago;
		return this;
	}

	public getCodBienDetraccion(): string | undefined {
		return this.codBienDetraccion;
	}

	public setCodBienDetraccion(
		codBienDetraccion: string | undefined,
	): Detraction {
		this.codBienDetraccion = codBienDetraccion;
		return this;
	}

	public getValueRef(): number | undefined {
		return this.valueRef;
	}

	public setValueRef(valueRef: number | undefined): Detraction {
		this.valueRef = valueRef;
		return this;
	}
}
