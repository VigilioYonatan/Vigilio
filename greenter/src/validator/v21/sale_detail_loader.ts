import {
	array,
	type Input,
	maxLength,
	number,
	object,
	optional,
	string,
} from "@vigilio/valibot";

export const sale_detail_loader = object({
	unidad: string(),
	descripcion: string([maxLength(500)]),
	cantidad: number(),
	codProducto: optional(string([maxLength(30)])),
	codProdSunat: optional(string([maxLength(8)])),
	codProdGS1: optional(string([maxLength(14)])),
	mtoValorUnitario: number(),
	mtoValorVenta: number(),
	totalImpuestos: number(),
	tipAfeIgv: string(),
	igv: number(),
	mtoBaseIgv: number(),
	porcentajeIgv: number(),
	cargos: optional(array(object({}))),
	descuentos: optional(array(object({}))),
	atributos: optional(array(object({}))),
});
export type SaleDetailLoader = Input<typeof sale_detail_loader>;
