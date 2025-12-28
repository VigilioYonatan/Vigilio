import type { DateTimeInterface } from "../../interfaces/date_time_interface";
import type { Exchange } from "../retention/exchange";
import type { Payment } from "../retention/payment";

export class PerceptionDetail {
	private tipoDoc?: string;
	private numDoc?: string;
	private fechaEmision?: DateTimeInterface;
	private impTotal?: number;
	private moneda?: string;
	private cobros?: Payment[];
	private fechaPercepcion?: DateTimeInterface;
	private impPercibido?: number;
	private impCobrar?: number;
	private tipoCambio?: Exchange;

	public getTipoDoc(): string | undefined {
		return this.tipoDoc;
	}

	public setTipoDoc(tipoDoc?: string): PerceptionDetail {
		this.tipoDoc = tipoDoc;
		return this;
	}

	public getNumDoc(): string | undefined {
		return this.numDoc;
	}

	public setNumDoc(numDoc?: string): PerceptionDetail {
		this.numDoc = numDoc;
		return this;
	}

	public getFechaEmision(): DateTimeInterface | undefined {
		return this.fechaEmision;
	}

	public setFechaEmision(
		fechaEmision: DateTimeInterface | undefined,
	): PerceptionDetail {
		this.fechaEmision = fechaEmision;
		return this;
	}

	public getImpTotal(): number | undefined {
		return this.impTotal;
	}

	public setImpTotal(impTotal?: number): PerceptionDetail {
		this.impTotal = impTotal;
		return this;
	}

	public getMoneda(): string | undefined {
		return this.moneda;
	}

	public setMoneda(moneda?: string): PerceptionDetail {
		this.moneda = moneda;
		return this;
	}

	public getCobros(): Payment[] | undefined {
		return this.cobros;
	}

	public setCobros(cobros: Payment[] | undefined): PerceptionDetail {
		this.cobros = cobros;
		return this;
	}

	public getFechaPercepcion(): DateTimeInterface | undefined {
		return this.fechaPercepcion;
	}

	public setFechaPercepcion(
		fechaPercepcion: DateTimeInterface | undefined,
	): PerceptionDetail {
		this.fechaPercepcion = fechaPercepcion;
		return this;
	}

	public getImpPercibido(): number | undefined {
		return this.impPercibido;
	}

	public setImpPercibido(impPercibido?: number): PerceptionDetail {
		this.impPercibido = impPercibido;
		return this;
	}

	public getImpCobrar(): number | undefined {
		return this.impCobrar;
	}

	public setImpCobrar(impCobrar?: number): PerceptionDetail {
		this.impCobrar = impCobrar;
		return this;
	}

	public getTipoCambio(): Exchange | undefined {
		return this.tipoCambio;
	}

	public setTipoCambio(tipoCambio: Exchange | undefined): PerceptionDetail {
		this.tipoCambio = tipoCambio;
		return this;
	}
}
