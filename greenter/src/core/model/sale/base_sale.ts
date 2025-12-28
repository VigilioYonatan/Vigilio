import type { DateTimeInterface } from "../../interfaces/date_time_interface";
import type { Client } from "../client/client";
import type { Company } from "../company/company";
import type { DocumentInterface } from "../documentation_interface";
import type { Cuota } from "./cuota";
import type { Legend } from "./legend";
import type { PaymentTerms } from "./payment_terms";
import type { SaleDetail } from "./sale_detail";

export class BaseSale implements DocumentInterface {
	protected ublVersion?: string = "2.0";
	protected tipoDoc?: string;
	protected serie?: string;
	protected correlativo?: string;
	protected fechaEmision?: DateTimeInterface;
	protected company?: Company;
	protected client?: Client;
	protected tipoMoneda?: string;
	protected sumOtrosCargos?: number;
	protected mtoOperGravadas?: number;
	protected mtoOperInafectas?: number;
	protected mtoOperExoneradas?: number;
	protected mtoOperExportacion?: number;
	protected mtoOperGratuitas?: number;
	protected mtoIGVGratuitas?: number;
	protected mtoIGV?: number;
	protected mtoBaseIvap?: number;
	protected mtoIvap?: number;
	protected mtoBaseIsc?: number;
	protected mtoISC?: number;
	protected mtoBaseOth?: number;
	protected mtoOtrosTributos?: number;
	protected icbper?: number;
	protected totalImpuestos?: number;
	protected redondeo?: number;
	protected mtoImpVenta?: number;
	protected details?: SaleDetail[];
	protected legends?: Legend[];
	protected guias?: Document[];
	protected relDocs?: Document[];
	protected compra?: string;
	protected formaPago?: PaymentTerms;
	protected cuotas?: Cuota[];

	public getUblVersion(): string | undefined {
		return this.ublVersion;
	}

	public setUblVersion(ublVersion?: string): this {
		this.ublVersion = ublVersion;
		return this;
	}

	public getTipoDoc(): string | undefined {
		return this.tipoDoc;
	}

	public setTipoDoc(tipoDoc?: string): this {
		this.tipoDoc = tipoDoc;
		return this;
	}

	public getSerie(): string | undefined {
		return this.serie;
	}

	public setSerie(serie?: string): this {
		this.serie = serie;
		return this;
	}

	public getCorrelativo(): string | undefined {
		return this.correlativo;
	}

	public setCorrelativo(correlativo?: string): this {
		this.correlativo = correlativo;
		return this;
	}

	public getFechaEmision(): DateTimeInterface | undefined {
		return this.fechaEmision;
	}

	public setFechaEmision(fechaEmision: DateTimeInterface | undefined): this {
		this.fechaEmision = fechaEmision;
		return this;
	}

	public getCompany(): Company | undefined {
		return this.company;
	}

	public setCompany(company: Company | undefined): this {
		this.company = company;
		return this;
	}

	public getClient(): Client | undefined {
		return this.client;
	}

	public setClient(client: Client | undefined): this {
		this.client = client;
		return this;
	}

	public getTipoMoneda(): string | undefined {
		return this.tipoMoneda;
	}

	public setTipoMoneda(tipoMoneda?: string): this {
		this.tipoMoneda = tipoMoneda;
		return this;
	}

	public getSumOtrosCargos(): number | undefined {
		return this.sumOtrosCargos;
	}

	public setSumOtrosCargos(sumOtrosCargos?: number): this {
		this.sumOtrosCargos = sumOtrosCargos;
		return this;
	}

	public getMtoOperGravadas(): number | undefined {
		return this.mtoOperGravadas;
	}

	public setMtoOperGravadas(mtoOperGravadas?: number): this {
		this.mtoOperGravadas = mtoOperGravadas;
		return this;
	}

	public getMtoOperInafectas(): number | undefined {
		return this.mtoOperInafectas;
	}

	public setMtoOperInafectas(mtoOperInafectas?: number): this {
		this.mtoOperInafectas = mtoOperInafectas;
		return this;
	}

	public getMtoOperExoneradas(): number | undefined {
		return this.mtoOperExoneradas;
	}

	public setMtoOperExoneradas(mtoOperExoneradas?: number): this {
		this.mtoOperExoneradas = mtoOperExoneradas;
		return this;
	}

	public getMtoOperExportacion(): number | undefined {
		return this.mtoOperExportacion;
	}

	public setMtoOperExportacion(mtoOperExportacion?: number): this {
		this.mtoOperExportacion = mtoOperExportacion;
		return this;
	}

	public getMtoOperGratuitas(): number | undefined {
		return this.mtoOperGratuitas;
	}

	public setMtoOperGratuitas(mtoOperGratuitas?: number): this {
		this.mtoOperGratuitas = mtoOperGratuitas;
		return this;
	}

	public getMtoIGVGratuitas(): number | undefined {
		return this.mtoIGVGratuitas;
	}

	public setMtoIGVGratuitas(mtoIGVGratuitas?: number): this {
		this.mtoIGVGratuitas = mtoIGVGratuitas;
		return this;
	}

	public getMtoIGV(): number | undefined {
		return this.mtoIGV;
	}

	public setMtoIGV(mtoIGV?: number): this {
		this.mtoIGV = mtoIGV;
		return this;
	}

	public getMtoBaseIvap(): number | undefined {
		return this.mtoBaseIvap;
	}

	public setMtoBaseIvap(mtoBaseIvap?: number): this {
		this.mtoBaseIvap = mtoBaseIvap;
		return this;
	}

	public getMtoIvap(): number | undefined {
		return this.mtoIvap;
	}

	public setMtoIvap(mtoIvap?: number): this {
		this.mtoIvap = mtoIvap;
		return this;
	}

	public getMtoBaseIsc(): number | undefined {
		return this.mtoBaseIsc;
	}

	public setMtoBaseIsc(mtoBaseIsc?: number): this {
		this.mtoBaseIsc = mtoBaseIsc;
		return this;
	}

	public getMtoISC(): number | undefined {
		return this.mtoISC;
	}

	public setMtoISC(mtoISC?: number): this {
		this.mtoISC = mtoISC;
		return this;
	}

	public getMtoBaseOth(): number | undefined {
		return this.mtoBaseOth;
	}

	public setMtoBaseOth(mtoBaseOth?: number): this {
		this.mtoBaseOth = mtoBaseOth;
		return this;
	}

	public getMtoOtrosTributos(): number | undefined {
		return this.mtoOtrosTributos;
	}

	public setMtoOtrosTributos(mtoOtrosTributos?: number): this {
		this.mtoOtrosTributos = mtoOtrosTributos;
		return this;
	}

	public getIcbper(): number | undefined {
		return this.icbper;
	}

	public setIcbper(icbper?: number): this {
		this.icbper = icbper;
		return this;
	}

	public getTotalImpuestos(): number | undefined {
		return this.totalImpuestos;
	}

	public setTotalImpuestos(totalImpuestos?: number): this {
		this.totalImpuestos = totalImpuestos;
		return this;
	}

	public getRedondeo(): number | undefined {
		return this.redondeo;
	}

	public setRedondeo(redondeo?: number): this {
		this.redondeo = redondeo;
		return this;
	}

	public getMtoImpVenta(): number | undefined {
		return this.mtoImpVenta;
	}

	public setMtoImpVenta(mtoImpVenta?: number): this {
		this.mtoImpVenta = mtoImpVenta;
		return this;
	}

	public getDetails(): SaleDetail[] | undefined {
		return this.details;
	}

	public setDetails(details: SaleDetail[] | undefined): this {
		this.details = details;
		return this;
	}

	public getLegends(): Legend[] | undefined {
		return this.legends;
	}

	public setLegends(legends: Legend[] | undefined): this {
		this.legends = legends;
		return this;
	}

	public getGuias(): Document[] | undefined {
		return this.guias;
	}

	public setGuias(guias: Document[] | undefined): this {
		this.guias = guias;
		return this;
	}

	public getRelDocs(): Document[] | undefined {
		return this.relDocs;
	}

	public setRelDocs(relDocs: Document[] | undefined): this {
		this.relDocs = relDocs;
		return this;
	}

	public getCompra(): string | undefined {
		return this.compra;
	}

	public setCompra(compra?: string): this {
		this.compra = compra;
		return this;
	}

	public getFormaPago(): PaymentTerms | undefined {
		return this.formaPago;
	}

	public setFormaPago(formaPago: PaymentTerms | undefined): this {
		this.formaPago = formaPago;
		return this;
	}

	public getCuotas(): Cuota[] | undefined {
		return this.cuotas;
	}

	public setCuotas(cuotas: Cuota[] | undefined): this {
		this.cuotas = cuotas;
		return this;
	}

	public getName(): string {
		if (!this.company || !this.company.ruc) {
			throw new Error("Company RUC is required");
		}

		const parts = [
			this.company.ruc,
			this.getTipoDoc(),
			this.getSerie(),
			this.getCorrelativo(),
		];

		return parts
			.filter((part) => part !== undefined && part !== null)
			.join("-");
	}
}
