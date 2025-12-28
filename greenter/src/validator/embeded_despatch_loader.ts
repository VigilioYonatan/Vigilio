import {
	type Input,
	maxLength,
	minLength,
	number,
	object,
	optional,
	string,
} from "@vigilio/valibot";

export const embeded_despatch_loader = object({
	llegada: optional(object({})),
	partida: optional(object({})),
	transportista: optional(object({})),
	nroLicencia: optional(string([maxLength(30)])),
	transpPlaca: optional(string([maxLength(10)])),
	transpCodeAuth: optional(string([maxLength(50)])),
	transpMarca: optional(string([maxLength(50)])),
	modTraslado: optional(string([minLength(2), maxLength(2)])),
	pesoBruto: optional(number()),
	undPesoBruto: optional(string([maxLength(4)])),
});
export type EmbededDespatchLoader = Input<typeof embeded_despatch_loader>;
