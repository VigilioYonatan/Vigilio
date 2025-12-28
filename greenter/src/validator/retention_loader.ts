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

export const retention_loader = object({
	serie: string([maxLength(4)]),
	correlativo: string([maxLength(8)]),
	fechaEmision: string(),
	company: object({}),
	proveedor: object({}),
	regimen: string([minLength(2), maxLength(2)]),
	tasa: number(),
	impRetenido: number(),
	impPagado: number(),
	observacion: optional(string([maxLength(250)])),
	details: array(object({})),
});
export type RetentionLoader = Input<typeof retention_loader>;
