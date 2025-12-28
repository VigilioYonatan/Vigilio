import type { DateTimeInterface } from "../../interfaces/date_time_interface";

export class Payment {
	private moneda?: string;
	private importe?: number;
	private fecha?: DateTimeInterface;

	public getMoneda(): string | undefined {
		return this.moneda;
	}

	public setMoneda(moneda?: string): Payment {
		this.moneda = moneda;
		return this;
	}

	public getImporte(): number | undefined {
		return this.importe;
	}

	public setImporte(importe?: number): Payment {
		this.importe = importe;
		return this;
	}

	public getFecha(): DateTimeInterface | undefined {
		return this.fecha;
	}

	public setFecha(fecha: DateTimeInterface | undefined): Payment {
		this.fecha = fecha;
		return this;
	}
}
