import type { DateTimeInterface } from "../../interfaces/date_time_interface";
import type { Client } from "../client/client";
import type { Company } from "../company/company";
import type { DocumentInterface } from "../documentation_interface";
import type { PerceptionDetail } from "./perception_detail";

export class Perception implements DocumentInterface {
	private serie?: string;
	private correlativo?: string;
	private fechaEmision?: DateTimeInterface;
	private company?: Company;
	private proveedor?: Client;
	private regimen?: string;
	private tasa?: number;
	private impPercibido?: number;
	private impCobrado?: number;
	private observacion?: string;
	private details?: PerceptionDetail[];

	public getSerie(): string | undefined {
		return this.serie;
	}

	public setSerie(serie?: string): Perception {
		this.serie = serie;
		return this;
	}

	public getCorrelativo(): string | undefined {
		return this.correlativo;
	}

	public setCorrelativo(correlativo?: string): Perception {
		this.correlativo = correlativo;
		return this;
	}

	public getFechaEmision(): DateTimeInterface | undefined {
		return this.fechaEmision;
	}

	public setFechaEmision(
		fechaEmision: DateTimeInterface | undefined,
	): Perception {
		this.fechaEmision = fechaEmision;
		return this;
	}

	public getCompany(): Company | undefined {
		return this.company;
	}

	public setCompany(company: Company | undefined): Perception {
		this.company = company;
		return this;
	}

	public getProveedor(): Client | undefined {
		return this.proveedor;
	}

	public setProveedor(proveedor: Client | undefined): Perception {
		this.proveedor = proveedor;
		return this;
	}

	public getRegimen(): string | undefined {
		return this.regimen;
	}

	public setRegimen(regimen?: string): Perception {
		this.regimen = regimen;
		return this;
	}

	public getTasa(): number | undefined {
		return this.tasa;
	}

	public setTasa(tasa?: number): Perception {
		this.tasa = tasa;
		return this;
	}

	public getImpPercibido(): number | undefined {
		return this.impPercibido;
	}

	public setImpPercibido(impPercibido?: number): Perception {
		this.impPercibido = impPercibido;
		return this;
	}

	public getImpCobrado(): number | undefined {
		return this.impCobrado;
	}

	public setImpCobrado(impCobrado?: number): Perception {
		this.impCobrado = impCobrado;
		return this;
	}

	public getObservacion(): string | undefined {
		return this.observacion;
	}

	public setObservacion(observacion?: string): Perception {
		this.observacion = observacion;
		return this;
	}

	public getDetails(): PerceptionDetail[] | undefined {
		return this.details;
	}

	public setDetails(details: PerceptionDetail[] | undefined): Perception {
		this.details = details;
		return this;
	}

	public getName(): string {
		if (!this.company || !this.company.ruc) {
			throw new Error("Company RUC is required");
		}

		const parts = [
			this.company.ruc,
			"40",
			this.getSerie(),
			this.getCorrelativo(),
		];

		return parts
			.filter((part) => part !== undefined && part !== null)
			.join("-");
	}
}
