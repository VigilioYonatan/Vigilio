import type { Charge } from "./charge";
import type { DetailAttribute } from "./detail_attribute";

export class SaleDetail {
	private unidad?: string;
	private cantidad?: number;
	private codProducto?: string;
	private codProdSunat?: string;
	private codProdGS1?: string;
	private descripcion?: string;
	private mtoValorUnitario?: number;
	private cargos?: Charge[];
	private descuentos?: Charge[];
	private descuento?: number;
	private mtoBaseIgv?: number;
	private porcentajeIgv?: number;
	private igv?: number;
	private tipAfeIgv?: string;
	private mtoBaseIsc?: number;
	private porcentajeIsc?: number;
	private isc?: number;
	private tipSisIsc?: string;
	private mtoBaseOth?: number;
	private porcentajeOth?: number;
	private otroTributo?: number;
	private icbper?: number;
	private factorIcbper?: number = 0.3;
	private totalImpuestos?: number;
	private mtoPrecioUnitario?: number;
	private mtoValorVenta?: number;
	private mtoValorGratuito?: number;
	private atributos?: DetailAttribute[];

	public getUnidad(): string | undefined {
		return this.unidad;
	}

	public setUnidad(unidad?: string): SaleDetail {
		this.unidad = unidad;
		return this;
	}

	public getCantidad(): number | undefined {
		return this.cantidad;
	}

	public setCantidad(cantidad?: number): SaleDetail {
		this.cantidad = cantidad;
		return this;
	}

	public getCodProducto(): string | undefined {
		return this.codProducto;
	}

	public setCodProducto(codProducto?: string): SaleDetail {
		this.codProducto = codProducto;
		return this;
	}

	public getCodProdSunat(): string | undefined {
		return this.codProdSunat;
	}

	public setCodProdSunat(codProdSunat?: string): SaleDetail {
		this.codProdSunat = codProdSunat;
		return this;
	}

	public getCodProdGS1(): string | undefined {
		return this.codProdGS1;
	}

	public setCodProdGS1(codProdGS1?: string): SaleDetail {
		this.codProdGS1 = codProdGS1;
		return this;
	}

	public getDescripcion(): string | undefined {
		return this.descripcion;
	}

	public setDescripcion(descripcion?: string): SaleDetail {
		this.descripcion = descripcion;
		return this;
	}

	public getMtoValorUnitario(): number | undefined {
		return this.mtoValorUnitario;
	}

	public setMtoValorUnitario(mtoValorUnitario: number | undefined): SaleDetail {
		this.mtoValorUnitario = mtoValorUnitario;
		return this;
	}

	public getCargos(): Charge[] | undefined {
		return this.cargos;
	}

	public setCargos(cargos: Charge[] | undefined): SaleDetail {
		this.cargos = cargos;
		return this;
	}

	public getDescuentos(): Charge[] | undefined {
		return this.descuentos;
	}

	public setDescuentos(descuentos: Charge[] | undefined): SaleDetail {
		this.descuentos = descuentos;
		return this;
	}

	public getDescuento(): number | undefined {
		return this.descuento;
	}

	public setDescuento(descuento?: number): SaleDetail {
		this.descuento = descuento;
		return this;
	}

	public getMtoBaseIgv(): number | undefined {
		return this.mtoBaseIgv;
	}

	public setMtoBaseIgv(mtoBaseIgv?: number): SaleDetail {
		this.mtoBaseIgv = mtoBaseIgv;
		return this;
	}

	public getPorcentajeIgv(): number | undefined {
		return this.porcentajeIgv;
	}

	public setPorcentajeIgv(porcentajeIgv?: number): SaleDetail {
		this.porcentajeIgv = porcentajeIgv;
		return this;
	}

	public getIgv(): number | undefined {
		return this.igv;
	}

	public setIgv(igv?: number): SaleDetail {
		this.igv = igv;
		return this;
	}

	public getTipAfeIgv(): string | undefined {
		return this.tipAfeIgv;
	}

	public setTipAfeIgv(tipAfeIgv?: string): SaleDetail {
		this.tipAfeIgv = tipAfeIgv;
		return this;
	}

	public getMtoBaseIsc(): number | undefined {
		return this.mtoBaseIsc;
	}

	public setMtoBaseIsc(mtoBaseIsc?: number): SaleDetail {
		this.mtoBaseIsc = mtoBaseIsc;
		return this;
	}

	public getPorcentajeIsc(): number | undefined {
		return this.porcentajeIsc;
	}

	public setPorcentajeIsc(porcentajeIsc?: number): SaleDetail {
		this.porcentajeIsc = porcentajeIsc;
		return this;
	}

	public getIsc(): number | undefined {
		return this.isc;
	}

	public setIsc(isc?: number): SaleDetail {
		this.isc = isc;
		return this;
	}

	public getTipSisIsc(): string | undefined {
		return this.tipSisIsc;
	}

	public setTipSisIsc(tipSisIsc?: string): SaleDetail {
		this.tipSisIsc = tipSisIsc;
		return this;
	}

	public getMtoBaseOth(): number | undefined {
		return this.mtoBaseOth;
	}

	public setMtoBaseOth(mtoBaseOth?: number): SaleDetail {
		this.mtoBaseOth = mtoBaseOth;
		return this;
	}

	public getPorcentajeOth(): number | undefined {
		return this.porcentajeOth;
	}

	public setPorcentajeOth(porcentajeOth?: number): SaleDetail {
		this.porcentajeOth = porcentajeOth;
		return this;
	}

	public getOtroTributo(): number | undefined {
		return this.otroTributo;
	}

	public setOtroTributo(otroTributo?: number): SaleDetail {
		this.otroTributo = otroTributo;
		return this;
	}

	public getIcbper(): number | undefined {
		return this.icbper;
	}

	public setIcbper(icbper?: number): SaleDetail {
		this.icbper = icbper;
		return this;
	}

	public getFactorIcbper(): number | undefined {
		return this.factorIcbper;
	}

	public setFactorIcbper(factorIcbper?: number): SaleDetail {
		this.factorIcbper = factorIcbper;
		return this;
	}

	public getTotalImpuestos(): number | undefined {
		return this.totalImpuestos;
	}

	public setTotalImpuestos(totalImpuestos?: number): SaleDetail {
		this.totalImpuestos = totalImpuestos;
		return this;
	}

	public getMtoPrecioUnitario(): number | undefined {
		return this.mtoPrecioUnitario;
	}

	public setMtoPrecioUnitario(
		mtoPrecioUnitario: number | undefined,
	): SaleDetail {
		this.mtoPrecioUnitario = mtoPrecioUnitario;
		return this;
	}

	public getMtoValorVenta(): number | undefined {
		return this.mtoValorVenta;
	}

	public setMtoValorVenta(mtoValorVenta?: number): SaleDetail {
		this.mtoValorVenta = mtoValorVenta;
		return this;
	}

	public getMtoValorGratuito(): number | undefined {
		return this.mtoValorGratuito;
	}

	public setMtoValorGratuito(mtoValorGratuito: number | undefined): SaleDetail {
		this.mtoValorGratuito = mtoValorGratuito;
		return this;
	}

	public getAtributos(): DetailAttribute[] | undefined {
		return this.atributos;
	}

	public setAtributos(atributos: DetailAttribute[] | undefined): SaleDetail {
		this.atributos = atributos;
		return this;
	}
}
