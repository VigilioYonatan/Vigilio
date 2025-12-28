import {
	type Input,
	maxLength,
	minLength,
	number,
	object,
	optional,
	string,
} from "@vigilio/valibot";

export const shipment_loader = object({
	codTraslado: string([minLength(2), maxLength(2)]),
	desTraslado: optional(string([maxLength(100)])),
	indTransbordo: optional(string()),
	pesoTotal: number(),
	undPesoTotal: string([maxLength(4)]),
	modTraslado: string([minLength(2), maxLength(2)]),
	fecTraslado: string(),
	numContenedor: optional(string([maxLength(17)])),
	codPuerto: optional(string([maxLength(3)])),
	transportista: optional(object({})),
	llegada: optional(object({})),
	partida: optional(object({})),
});
export type ShipmentLoader = Input<typeof shipment_loader>;
