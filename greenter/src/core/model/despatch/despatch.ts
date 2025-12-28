import type { DateTimeInterface } from "../../interfaces/date_time_interface";
import type { Client } from "../client/client";
import type { Company } from "../company/company";
import type { DocumentInterface } from "../documentation_interface";
import type { AdditionalDoc } from "./additional_doc";
import type { DespatchDetail } from "./despatch_detail";
import type { Shipment } from "./shipment";

export class Despatch implements DocumentInterface {
	private version?: string;
	private tipoDoc?: string;
	private serie?: string;
	private correlativo?: string;
	private observacion?: string;
	private fechaEmision?: DateTimeInterface;
	private company?: Company;
	private destinatario?: Client;
	private tercero?: Client;
	private comprador?: Client;
	private envio?: Shipment;
	private docBaja?: Document;
	private relDoc?: Document;
	private addDocs?: AdditionalDoc[];
	private details?: DespatchDetail[];

	public getVersion(): string | undefined {
		return this.version;
	}

	public setVersion(version?: string): Despatch {
		this.version = version;
		return this;
	}

	public getTipoDoc(): string | undefined {
		return this.tipoDoc;
	}

	public setTipoDoc(tipoDoc?: string): Despatch {
		this.tipoDoc = tipoDoc;
		return this;
	}

	public getSerie(): string | undefined {
		return this.serie;
	}

	public setSerie(serie?: string): Despatch {
		this.serie = serie;
		return this;
	}

	public getCorrelativo(): string | undefined {
		return this.correlativo;
	}

	public setCorrelativo(correlativo?: string): Despatch {
		this.correlativo = correlativo;
		return this;
	}

	public getObservacion(): string | undefined {
		return this.observacion;
	}

	public setObservacion(observacion?: string): Despatch {
		this.observacion = observacion;
		return this;
	}

	public getFechaEmision(): DateTimeInterface | undefined {
		return this.fechaEmision;
	}

	public setFechaEmision(
		fechaEmision: DateTimeInterface | undefined,
	): Despatch {
		this.fechaEmision = fechaEmision;
		return this;
	}

	public getCompany(): Company | undefined {
		return this.company;
	}

	public setCompany(company: Company | undefined): Despatch {
		this.company = company;
		return this;
	}

	public getDestinatario(): Client | undefined {
		return this.destinatario;
	}

	public setDestinatario(destinatario: Client | undefined): Despatch {
		this.destinatario = destinatario;
		return this;
	}

	public getTercero(): Client | undefined {
		return this.tercero;
	}

	public setTercero(tercero: Client | undefined): Despatch {
		this.tercero = tercero;
		return this;
	}

	public getComprador(): Client | undefined {
		return this.comprador;
	}

	public setComprador(comprador: Client | undefined): Despatch {
		this.comprador = comprador;
		return this;
	}

	public getEnvio(): Shipment | undefined {
		return this.envio;
	}

	public setEnvio(envio: Shipment | undefined): Despatch {
		this.envio = envio;
		return this;
	}

	public getDocBaja(): Document | undefined {
		return this.docBaja;
	}

	/**
	 * @deprecated unused
	 */
	public setDocBaja(docBaja: Document | undefined): Despatch {
		this.docBaja = docBaja;
		return this;
	}

	public getRelDoc(): Document | undefined {
		return this.relDoc;
	}

	/**
	 * @deprecated use setAddDocs
	 */
	public setRelDoc(relDoc: Document | undefined): Despatch {
		this.relDoc = relDoc;
		return this;
	}

	public getAddDocs(): AdditionalDoc[] | undefined {
		return this.addDocs;
	}

	public setAddDocs(addDocs: AdditionalDoc[] | undefined): Despatch {
		this.addDocs = addDocs;
		return this;
	}

	public getDetails(): DespatchDetail[] | undefined {
		return this.details;
	}

	public setDetails(details: DespatchDetail[] | undefined): Despatch {
		this.details = details;
		return this;
	}

	/**
	 * Get FileName without extension.
	 */
	public getName(): string {
		if (!this.company || !this.company.ruc) {
			throw new Error("Company RUC is required");
		}

		const parts = [
			this.company.ruc,
			this.getTipoDoc(), // 09
			this.getSerie(),
			this.getCorrelativo(),
		];

		return parts
			.filter((part) => part !== undefined && part !== null)
			.join("-");
	}
}
