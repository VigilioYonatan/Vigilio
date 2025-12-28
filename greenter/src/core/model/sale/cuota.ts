import type { DateTimeInterface } from "../../interfaces/date_time_interface";

export class Cuota {
	private moneda?: string;
	private monto?: number;
	private fechaPago?: DateTimeInterface;

	public getMoneda(): string | undefined {
		return this.moneda;
	}

	public setMoneda(moneda?: string): this {
		this.moneda = moneda;
		return this;
	}

	public getMonto(): number | undefined {
		return this.monto;
	}

	public setMonto(monto?: number): this {
		this.monto = monto;
		return this;
	}

	public getFechaPago(): DateTimeInterface | undefined {
		return this.fechaPago;
	}

	public setFechaPago(fechaPago: DateTimeInterface | undefined): this {
		this.fechaPago = fechaPago;
		return this;
	}
}
