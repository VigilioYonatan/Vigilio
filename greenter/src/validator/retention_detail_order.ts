import {
	array,
	type Input,
	maxLength,
	number,
	object,
	optional,
	string,
} from "@vigilio/valibot";

export const retention_detail_loader = object({
	tipoDoc: string([maxLength(2)]),
	numDoc: string([maxLength(13)]),
	fechaEmision: string(),
	impTotal: number(),
	moneda: string(),
	pagos: array(object({})),
	impPagar: number(),
	fechaRetencion: string(),
	impRetenido: number(),
	tipoCambio: optional(object({})),
});
export type RetentionDetailLoader = Input<typeof retention_detail_loader>;
