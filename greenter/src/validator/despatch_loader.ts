import {
	array,
	type Input,
	maxLength,
	object,
	optional,
	string,
} from "@vigilio/valibot";

export const despatch_loader = object({
	tipoDoc: string([maxLength(2)]),
	serie: string([maxLength(4)]),
	correlativo: string([maxLength(8)]),
	observacion: optional(string([maxLength(250)])),
	fechaEmision: string(),
	destinatario: object({}),
	company: object({}),
	tercero: optional(object({})),
	envio: object({}),
	docBaja: optional(object({})),
	relDoc: optional(object({})),
	details: array(object({})),
});
export type DespatchLoader = Input<typeof despatch_loader>;
