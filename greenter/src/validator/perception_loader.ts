import {
	array,
	type Input,
	maxLength,
	minLength,
	number,
	object,
	optional,
	string,
} from "@vigilio/valibot";

export const perception_loader = object({
	serie: string([maxLength(4)]),
	correlativo: string([maxLength(8)]),
	fechaEmision: string(),
	company: object({}),
	proveedor: object({}),
	regimen: string([minLength(2), maxLength(2)]),
	tasa: number(),
	impPercibido: number(),
	impCobrado: number(),
	observacion: optional(string([maxLength(250)])),
	details: array(object({})),
});
export type PerceptionLoader = Input<typeof perception_loader>;
