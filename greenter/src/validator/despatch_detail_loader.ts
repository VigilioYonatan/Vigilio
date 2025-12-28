import {
	type Input,
	maxLength,
	number,
	object,
	optional,
	string,
} from "@vigilio/valibot";

export const despatch_detail_loader = object({
	codigo: optional(string([maxLength(16)])),
	descripcion: string([maxLength(250)]),
	unidad: string(),
	cantidad: number(),
	codProdSunat: optional(string([maxLength(20)])),
});
export type DespatchDetailLoader = Input<typeof despatch_detail_loader>;
