import type { DateTimeInterface } from "../../interfaces/date_time_interface";
import type { Client } from "../client/client";
import type { Address } from "../company/address";
import { BaseSale } from "./base_sale";
import type { Charge } from "./charge";
import type { Detraction } from "./detraction";
import type { EmbededDespatch } from "./embeded_despatch";
import type { Prepayment } from "./prepayment";
import type { SalePerception } from "./sale_perception";

export class Invoice extends BaseSale {
	private tipoOperacion?: string;
	private fecVencimiento?: DateTimeInterface;
	private sumDsctoGlobal?: number;
	private mtoDescuentos?: number;
	private sumOtrosDescuentos?: number;
	private descuentos?: Charge[];
	private cargos?: Charge[];
	private mtoCargos?: number;
	private totalAnticipos?: number;
	private perception?: SalePerception;
	private guiaEmbebida?: EmbededDespatch;
	private anticipos?: Prepayment[];
	private detraccion?: Detraction;
	private seller?: Client;
	private valorVenta?: number;
	private subTotal?: number;
	private observacion?: string;
	private direccionEntrega?: Address;

	public getTipoOperacion(): string | undefined {
		return this.tipoOperacion;
	}

	public setTipoOperacion(tipoOperacion?: string): Invoice {
		this.tipoOperacion = tipoOperacion;
		return this;
	}

	public getFecVencimiento(): DateTimeInterface | undefined {
		return this.fecVencimiento;
	}

	public setFecVencimiento(
		fecVencimiento: DateTimeInterface | undefined,
	): Invoice {
		this.fecVencimiento = fecVencimiento;
		return this;
	}

	public getSumDsctoGlobal(): number | undefined {
		return this.sumDsctoGlobal;
	}

	public setSumDsctoGlobal(sumDsctoGlobal?: number): Invoice {
		this.sumDsctoGlobal = sumDsctoGlobal;
		return this;
	}

	public getMtoDescuentos(): number | undefined {
		return this.mtoDescuentos;
	}

	public setMtoDescuentos(mtoDescuentos?: number): Invoice {
		this.mtoDescuentos = mtoDescuentos;
		return this;
	}

	public getSumOtrosDescuentos(): number | undefined {
		return this.sumOtrosDescuentos;
	}

	public setSumOtrosDescuentos(
		sumOtrosDescuentos: number | undefined,
	): Invoice {
		this.sumOtrosDescuentos = sumOtrosDescuentos;
		return this;
	}

	public getDescuentos(): Charge[] | undefined {
		return this.descuentos;
	}

	public setDescuentos(descuentos: Charge[] | undefined): Invoice {
		this.descuentos = descuentos;
		return this;
	}

	public getCargos(): Charge[] | undefined {
		return this.cargos;
	}

	public setCargos(cargos: Charge[] | undefined): Invoice {
		this.cargos = cargos;
		return this;
	}

	public getMtoCargos(): number | undefined {
		return this.mtoCargos;
	}

	public setMtoCargos(mtoCargos?: number): Invoice {
		this.mtoCargos = mtoCargos;
		return this;
	}

	public getTotalAnticipos(): number | undefined {
		return this.totalAnticipos;
	}

	public setTotalAnticipos(totalAnticipos?: number): Invoice {
		this.totalAnticipos = totalAnticipos;
		return this;
	}

	public getPerception(): SalePerception | undefined {
		return this.perception;
	}

	public setPerception(perception: SalePerception | undefined): Invoice {
		this.perception = perception;
		return this;
	}

	public getGuiaEmbebida(): EmbededDespatch | undefined {
		return this.guiaEmbebida;
	}

	public setGuiaEmbebida(guiaEmbebida: EmbededDespatch | undefined): Invoice {
		this.guiaEmbebida = guiaEmbebida;
		return this;
	}

	public getAnticipos(): Prepayment[] | undefined {
		return this.anticipos;
	}

	public setAnticipos(anticipos: Prepayment[] | undefined): Invoice {
		this.anticipos = anticipos;
		return this;
	}

	public getDetraccion(): Detraction | undefined {
		return this.detraccion;
	}

	public setDetraccion(detraccion: Detraction | undefined): Invoice {
		this.detraccion = detraccion;
		return this;
	}

	public getSeller(): Client | undefined {
		return this.seller;
	}

	public setSeller(seller: Client | undefined): Invoice {
		this.seller = seller;
		return this;
	}

	public getValorVenta(): number | undefined {
		return this.valorVenta;
	}

	public setValorVenta(valorVenta?: number): Invoice {
		this.valorVenta = valorVenta;
		return this;
	}

	public getSubTotal(): number | undefined {
		return this.subTotal;
	}

	public setSubTotal(subTotal?: number): Invoice {
		this.subTotal = subTotal;
		return this;
	}

	public getObservacion(): string | undefined {
		return this.observacion;
	}

	public setObservacion(observacion?: string): Invoice {
		this.observacion = observacion;
		return this;
	}

	public getDireccionEntrega(): Address | undefined {
		return this.direccionEntrega;
	}

	public setDireccionEntrega(direccionEntrega: Address | undefined): Invoice {
		this.direccionEntrega = direccionEntrega;
		return this;
	}
}
