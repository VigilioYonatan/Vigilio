import type { DateTimeInterface } from "../../interfaces/date_time_interface";
import type { Company } from "../company/company";
import type { DocumentInterface } from "../documentation_interface";
import { TimezonePeTrait } from "../time_zone_pe_trait";
import type { VoidedDetail } from "./voided_detail";

export class Voided implements DocumentInterface {
	protected correlativo?: string;
	protected fecGeneracion?: DateTimeInterface;
	protected fecComunicacion?: DateTimeInterface;
	protected company?: Company;
	protected details?: VoidedDetail[];

	public getCorrelativo(): string | undefined {
		return this.correlativo;
	}

	public setCorrelativo(correlativo: string | undefined): Voided {
		this.correlativo = correlativo;
		return this;
	}

	public getFecGeneracion(): DateTimeInterface | undefined {
		return this.fecGeneracion;
	}

	public setFecGeneracion(
		fecGeneracion: DateTimeInterface | undefined,
	): Voided {
		this.fecGeneracion = fecGeneracion;
		return this;
	}

	public getFecComunicacion(): DateTimeInterface | undefined {
		return this.fecComunicacion;
	}

	public setFecComunicacion(
		fecComunicacion: DateTimeInterface | undefined,
	): Voided {
		this.fecComunicacion = fecComunicacion;
		return this;
	}

	public getCompany(): Company | undefined {
		return this.company;
	}

	public setCompany(company: Company | undefined): Voided {
		this.company = company;
		return this;
	}

	public getDetails(): VoidedDetail[] | undefined {
		return this.details;
	}

	public setDetails(details: VoidedDetail[] | undefined): Voided {
		this.details = details;
		return this;
	}

	public getXmlId(): string {
		const fecComunicacionPe = TimezonePeTrait.getDateWithTimezone(
			this.fecComunicacion!,
		);
		const parts = ["RA", fecComunicacionPe.format("Ymd"), this.correlativo];

		return parts
			.filter((part) => part !== undefined && part !== null)
			.join("-");
	}

	public getName(): string {
		return (this.company?.ruc || "") + "-" + this.getXmlId();
	}
}
