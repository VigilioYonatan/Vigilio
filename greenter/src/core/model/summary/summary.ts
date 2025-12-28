import type { DateTimeInterface } from "../../interfaces/date_time_interface";
import type { Company } from "../company/company";
import type { DocumentInterface } from "../documentation_interface";
import { TimezonePeTrait } from "../time_zone_pe_trait";
import type { SummaryDetail } from "./summary_detail";

export class Summary implements DocumentInterface {
	protected correlativo?: string;
	protected fecGeneracion?: DateTimeInterface;
	protected fecResumen?: DateTimeInterface;
	protected moneda?: string = "PEN";
	protected company?: Company;
	protected details?: SummaryDetail[];

	public getCorrelativo(): string | undefined {
		return this.correlativo;
	}

	public setCorrelativo(correlativo: string | undefined): Summary {
		this.correlativo = correlativo;
		return this;
	}

	public getFecGeneracion(): DateTimeInterface | undefined {
		return this.fecGeneracion;
	}

	public setFecGeneracion(
		fecGeneracion: DateTimeInterface | undefined,
	): Summary {
		this.fecGeneracion = fecGeneracion;
		return this;
	}

	public getFecResumen(): DateTimeInterface | undefined {
		return this.fecResumen;
	}

	public setFecResumen(fecResumen: DateTimeInterface | undefined): Summary {
		this.fecResumen = fecResumen;
		return this;
	}

	public getMoneda(): string | undefined {
		return this.moneda;
	}

	public setMoneda(moneda: string | undefined): Summary {
		this.moneda = moneda;
		return this;
	}

	public getCompany(): Company | undefined {
		return this.company;
	}

	public setCompany(company: Company | undefined): Summary {
		this.company = company;
		return this;
	}

	public getDetails(): SummaryDetail[] | undefined {
		return this.details;
	}

	public setDetails(details: SummaryDetail[] | undefined): Summary {
		this.details = details;
		return this;
	}

	public getXmlId(): string {
		const fecResumenPe = TimezonePeTrait.getDateWithTimezone(this.fecResumen!);
		const parts = ["RC", fecResumenPe.format("Ymd"), this.correlativo];

		return parts
			.filter((part) => part !== undefined && part !== null)
			.join("-");
	}

	public getName(): string {
		return (this.company?.ruc || "") + "-" + this.getXmlId();
	}
}
