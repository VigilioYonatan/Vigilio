import type { DateTimeInterface } from "../../interfaces/date_time_interface";
import type { Exchange } from "./exchange";
import type { Payment } from "./payment";

export class RetentionDetail {
	private tipoDoc?: string;
	private numDoc?: string;
	private fechaEmision?: DateTimeInterface;
	private impTotal?: number;
	private moneda?: string;
	private pagos?: Payment[];
	private fechaRetencion?: DateTimeInterface;
	private impRetenido?: number;
	private impPagar?: number;
	private tipoCambio?: Exchange;

	public getTipoDoc(): string | undefined {
		return this.tipoDoc;
	}

	public setTipoDoc(tipoDoc?: string): RetentionDetail {
		this.tipoDoc = tipoDoc;
		return this;
	}

	public getNumDoc(): string | undefined {
		return this.numDoc;
	}

	public setNumDoc(numDoc?: string): RetentionDetail {
		this.numDoc = numDoc;
		return this;
	}

	public getFechaEmision(): DateTimeInterface | undefined {
		return this.fechaEmision;
	}

	public setFechaEmision(
		fechaEmision: DateTimeInterface | undefined,
	): RetentionDetail {
		this.fechaEmision = fechaEmision;
		return this;
	}

	public getImpTotal(): number | undefined {
		return this.impTotal;
	}

	public setImpTotal(impTotal?: number): RetentionDetail {
		this.impTotal = impTotal;
		return this;
	}

	public getMoneda(): string | undefined {
		return this.moneda;
	}

	public setMoneda(moneda?: string): RetentionDetail {
		this.moneda = moneda;
		return this;
	}

	public getPagos(): Payment[] | undefined {
		return this.pagos;
	}

	public setPagos(pagos: Payment[] | undefined): RetentionDetail {
		this.pagos = pagos;
		return this;
	}

	public getFechaRetencion(): DateTimeInterface | undefined {
		return this.fechaRetencion;
	}

	public setFechaRetencion(
		fechaRetencion: DateTimeInterface | undefined,
	): RetentionDetail {
		this.fechaRetencion = fechaRetencion;
		return this;
	}

	public getImpRetenido(): number | undefined {
		return this.impRetenido;
	}

	public setImpRetenido(impRetenido?: number): RetentionDetail {
		this.impRetenido = impRetenido;
		return this;
	}

	public getImpPagar(): number | undefined {
		return this.impPagar;
	}

	public setImpPagar(impPagar?: number): RetentionDetail {
		this.impPagar = impPagar;
		return this;
	}

	public getTipoCambio(): Exchange | undefined {
		return this.tipoCambio;
	}

	public setTipoCambio(tipoCambio: Exchange | undefined): RetentionDetail {
		this.tipoCambio = tipoCambio;
		return this;
	}
}
