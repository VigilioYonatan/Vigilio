import type { DateTimeInterface } from "../../interfaces/date_time_interface";
import type { Client } from "../client/client";
import type { Company } from "../company/company";
import type { DocumentInterface } from "../documentation_interface";

export class Receipt implements DocumentInterface {
	private person?: Company;
	private receptor?: Client;
	private serie?: string;
	private correlativo?: string;
	private fechaEmision?: DateTimeInterface;
	private concepto?: string;
	private montoLetras?: string;
	private subTotal?: number;
	private retencion?: number;
	private porcentaje?: number;
	private total?: number;

	public getPerson(): Company | undefined {
		return this.person;
	}

	public setPerson(person: Company | undefined): Receipt {
		this.person = person;
		return this;
	}

	public getReceptor(): Client | undefined {
		return this.receptor;
	}

	public setReceptor(receptor: Client | undefined): Receipt {
		this.receptor = receptor;
		return this;
	}

	public getSerie(): string | undefined {
		return this.serie;
	}

	public setSerie(serie?: string): Receipt {
		this.serie = serie;
		return this;
	}

	public getCorrelativo(): string | undefined {
		return this.correlativo;
	}

	public setCorrelativo(correlativo?: string): Receipt {
		this.correlativo = correlativo;
		return this;
	}

	public getFechaEmision(): DateTimeInterface | undefined {
		return this.fechaEmision;
	}

	public setFechaEmision(fechaEmision: DateTimeInterface | undefined): Receipt {
		this.fechaEmision = fechaEmision;
		return this;
	}

	public getConcepto(): string | undefined {
		return this.concepto;
	}

	public setConcepto(concepto?: string): Receipt {
		this.concepto = concepto;
		return this;
	}

	public getMontoLetras(): string | undefined {
		return this.montoLetras;
	}

	public setMontoLetras(montoLetras?: string): Receipt {
		this.montoLetras = montoLetras;
		return this;
	}

	public getSubTotal(): number | undefined {
		return this.subTotal;
	}

	public setSubTotal(subTotal?: number): Receipt {
		this.subTotal = subTotal;
		return this;
	}

	public getRetencion(): number | undefined {
		return this.retencion;
	}

	public setRetencion(retencion?: number): Receipt {
		this.retencion = retencion;
		return this;
	}

	public getPorcentaje(): number | undefined {
		return this.porcentaje;
	}

	public setPorcentaje(porcentaje?: number): Receipt {
		this.porcentaje = porcentaje;
		return this;
	}

	public getTotal(): number | undefined {
		return this.total;
	}

	public setTotal(total?: number): Receipt {
		this.total = total;
		return this;
	}

	public getName(): string {
		return "RHE" + (this.person?.ruc || "") + (this.getCorrelativo() || "");
	}
}
