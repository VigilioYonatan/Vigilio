import {
	array,
	type Input,
	maxLength,
	number,
	object,
	optional,
	string,
} from "@vigilio/valibot";

export const perception_detail_loader = object({
	tipoDoc: string([maxLength(2)]),
	numDoc: string([maxLength(13)]),
	fechaEmision: string(),
	impTotal: number(),
	moneda: string(),
	cobros: array(object({})),
	impCobrar: number(),
	fechaPercepcion: string(),
	impPercibido: number(),
	tipoCambio: optional(object({})),
});
export type PerceptionDetailLoader = Input<typeof perception_detail_loader>;
