import { BaseSale } from "./base_sale";
import type { SalePerception } from "./sale_perception";

export class Note extends BaseSale {
	private codMotivo?: string;
	private desMotivo?: string;
	private tipDocAfectado?: string;
	private numDocfectado?: string;
	private perception?: SalePerception;
	private valorVenta?: number;
	private subTotal?: number;

	public getCodMotivo(): string | undefined {
		return this.codMotivo;
	}

	public setCodMotivo(codMotivo?: string): Note {
		this.codMotivo = codMotivo;
		return this;
	}

	public getDesMotivo(): string | undefined {
		return this.desMotivo;
	}

	public setDesMotivo(desMotivo?: string): Note {
		this.desMotivo = desMotivo;
		return this;
	}

	public getTipDocAfectado(): string | undefined {
		return this.tipDocAfectado;
	}

	public setTipDocAfectado(tipDocAfectado?: string): Note {
		this.tipDocAfectado = tipDocAfectado;
		return this;
	}

	public getNumDocfectado(): string | undefined {
		return this.numDocfectado;
	}

	public setNumDocfectado(numDocfectado?: string): Note {
		this.numDocfectado = numDocfectado;
		return this;
	}

	public getPerception(): SalePerception | undefined {
		return this.perception;
	}

	public setPerception(perception: SalePerception | undefined): Note {
		this.perception = perception;
		return this;
	}

	public getValorVenta(): number | undefined {
		return this.valorVenta;
	}

	public setValorVenta(valorVenta?: number): Note {
		this.valorVenta = valorVenta;
		return this;
	}

	public getSubTotal(): number | undefined {
		return this.subTotal;
	}

	public setSubTotal(subTotal?: number): Note {
		this.subTotal = subTotal;
		return this;
	}
}
