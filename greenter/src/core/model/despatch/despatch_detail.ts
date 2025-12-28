import type { DetailAttribute } from "../sale/detail_attribute";

export class DespatchDetail {
	private codigo?: string;
	private descripcion?: string;
	private unidad?: string;
	private cantidad?: number;
	private codProdSunat?: string;
	private atributos?: DetailAttribute[];

	public getCodigo(): string | undefined {
		return this.codigo;
	}

	public setCodigo(codigo?: string): DespatchDetail {
		this.codigo = codigo;
		return this;
	}

	public getDescripcion(): string | undefined {
		return this.descripcion;
	}

	public setDescripcion(descripcion?: string): DespatchDetail {
		this.descripcion = descripcion;
		return this;
	}

	public getUnidad(): string | undefined {
		return this.unidad;
	}

	public setUnidad(unidad?: string): DespatchDetail {
		this.unidad = unidad;
		return this;
	}

	public getCantidad(): number | undefined {
		return this.cantidad;
	}

	public setCantidad(cantidad?: number): DespatchDetail {
		this.cantidad = cantidad;
		return this;
	}

	public getCodProdSunat(): string | undefined {
		return this.codProdSunat;
	}

	public setCodProdSunat(codProdSunat?: string): DespatchDetail {
		this.codProdSunat = codProdSunat;
		return this;
	}

	public getAtributos(): DetailAttribute[] | undefined {
		return this.atributos;
	}

	public setAtributos(
		atributos: DetailAttribute[] | undefined,
	): DespatchDetail {
		this.atributos = atributos;
		return this;
	}
}
