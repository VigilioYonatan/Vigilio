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

export const note_loader = object({
	tipoDoc: string([minLength(2), maxLength(2)]),
	serie: string([maxLength(4)]),
	correlativo: string([maxLength(8)]),
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
	relDocs: optional(array(object({}))),
	perception: optional(object({})),
	codMotivo: string([minLength(2), maxLength(2)]),
	desMotivo: string([maxLength(250)]),
	tipDocAfectado: string([minLength(2), maxLength(2)]),
	numDocfectado: string([maxLength(13)]),
});
export type NoteLoader = Input<typeof note_loader>;
