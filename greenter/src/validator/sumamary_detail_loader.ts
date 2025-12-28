import {
	type Input,
	maxLength,
	number,
	object,
	optional,
	string,
} from "@vigilio/valibot";

export const summary_detail_loader = object({
	tipoDoc: string(),
	serieNro: string(),
	clienteTipo: optional(string([maxLength(1)])),
	clienteNro: optional(string([maxLength(20)])),
	estado: string(),
	docReferencia: optional(object({})),
	percepcion: optional(object({})),
	total: number(),
	mtoIGV: number(),
});
export type SummaryDetailLoader = Input<typeof summary_detail_loader>;
