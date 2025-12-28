import {
	array,
	type Input,
	number,
	object,
	optional,
	regex,
	string,
} from "@vigilio/valibot";

export const invoice_loader = object({
	tipoDoc: string([regex(/^(01|03)$/)]),
	serie: string(),
	correlativo: string([regex(/^[0-9]{1,8}$/)]),
	fechaEmision: string(),
	tipoMoneda: string(),
	mtoOperGravadas: number(),
	mtoOperInafectas: number(),
	mtoOperExoneradas: number(),
	mtoImpVenta: number(),
	client: object({}),
	company: object({}),
	details: array(object({})),
	legends: array(object({})),
	guias: optional(array(object({}))),
	anticipos: optional(array(object({}))),
	detraccion: optional(object({})),
	relDocs: optional(array(object({}))),
	perception: optional(object({})),
	guiaEmbebida: optional(object({})),
});
export type InvoiceLoader = Input<typeof invoice_loader>;
