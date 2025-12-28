import {
	type Input,
	maxLength,
	number,
	object,
	optional,
	string,
} from "@vigilio/valibot";

export const sale_detail_loader = object({
	unidad: string(),
	descripcion: string([maxLength(250)]),
	cantidad: number(),
	codProducto: optional(string([maxLength(30)])),
	codProdSunat: optional(string([maxLength(20)])),
	mtoValorUnitario: number(),
	igv: number(),
	tipAfeIgv: string(),
	mtoPrecioUnitario: number(),
	mtoValorVenta: number(),
});
export type SaleDetailLoader = Input<typeof sale_detail_loader>;
