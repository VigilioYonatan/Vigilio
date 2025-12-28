import type { DateTimeInterface } from "../../interfaces/date_time_interface";

export class Exchange {
	private monedaRef?: string;
	private monedaObj?: string;
	private factor?: number;
	private fecha?: DateTimeInterface;

	public getMonedaRef(): string | undefined {
		return this.monedaRef;
	}

	public setMonedaRef(monedaRef?: string): Exchange {
		this.monedaRef = monedaRef;
		return this;
	}

	public getMonedaObj(): string | undefined {
		return this.monedaObj;
	}

	public setMonedaObj(monedaObj?: string): Exchange {
		this.monedaObj = monedaObj;
		return this;
	}

	public getFactor(): number | undefined {
		return this.factor;
	}

	public setFactor(factor?: number): Exchange {
		this.factor = factor;
		return this;
	}

	public getFecha(): DateTimeInterface | undefined {
		return this.fecha;
	}

	public setFecha(fecha: DateTimeInterface | undefined): Exchange {
		this.fecha = fecha;
		return this;
	}
}
