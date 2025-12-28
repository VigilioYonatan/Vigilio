import type { DateTimeInterface } from "../../interfaces/date_time_interface";
import type { Client } from "../client/client";
import type { Company } from "../company/company";
import type { DocumentInterface } from "../documentation_interface";
import type { RetentionDetail } from "./retention_detail";

export class Retention implements DocumentInterface {
	private serie?: string;
	private correlativo?: string;
	private fechaEmision?: DateTimeInterface;
	private company?: Company;
	private proveedor?: Client;
	private regimen?: string;
	private tasa?: number;
	private impRetenido?: number;
	private impPagado?: number;
	private observacion?: string;
	private details?: RetentionDetail[];

	public getSerie(): string | undefined {
		return this.serie;
	}

	public setSerie(serie?: string): Retention {
		this.serie = serie;
		return this;
	}

	public getCorrelativo(): string | undefined {
		return this.correlativo;
	}

	public setCorrelativo(correlativo?: string): Retention {
		this.correlativo = correlativo;
		return this;
	}

	public getFechaEmision(): DateTimeInterface | undefined {
		return this.fechaEmision;
	}

	public setFechaEmision(
		fechaEmision: DateTimeInterface | undefined,
	): Retention {
		this.fechaEmision = fechaEmision;
		return this;
	}

	public getCompany(): Company | undefined {
		return this.company;
	}

	public setCompany(company: Company | undefined): Retention {
		this.company = company;
		return this;
	}

	public getProveedor(): Client | undefined {
		return this.proveedor;
	}

	public setProveedor(proveedor: Client | undefined): Retention {
		this.proveedor = proveedor;
		return this;
	}

	public getRegimen(): string | undefined {
		return this.regimen;
	}

	public setRegimen(regimen?: string): Retention {
		this.regimen = regimen;
		return this;
	}

	public getTasa(): number | undefined {
		return this.tasa;
	}

	public setTasa(tasa?: number): Retention {
		this.tasa = tasa;
		return this;
	}

	public getImpRetenido(): number | undefined {
		return this.impRetenido;
	}

	public setImpRetenido(impRetenido?: number): Retention {
		this.impRetenido = impRetenido;
		return this;
	}

	public getImpPagado(): number | undefined {
		return this.impPagado;
	}

	public setImpPagado(impPagado?: number): Retention {
		this.impPagado = impPagado;
		return this;
	}

	public getObservacion(): string | undefined {
		return this.observacion;
	}

	public setObservacion(observacion?: string): Retention {
		this.observacion = observacion;
		return this;
	}

	public getDetails(): RetentionDetail[] | undefined {
		return this.details;
	}

	public setDetails(details: RetentionDetail[] | undefined): Retention {
		this.details = details;
		return this;
	}

	public getName(): string {
		if (!this.company || !this.company.ruc) {
			throw new Error("Company RUC is required");
		}

		const parts = [
			this.company.ruc,
			"20",
			this.getSerie(),
			this.getCorrelativo(),
		];

		return parts
			.filter((part) => part !== undefined && part !== null)
			.join("-");
	}
}
