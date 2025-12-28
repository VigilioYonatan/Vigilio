import {
	type Input,
	maxLength,
	minLength,
	object,
	string,
} from "@vigilio/valibot";

export const transportist_loader = object({
	tipoDoc: string([minLength(1), maxLength(1)]),
	numDoc: string([maxLength(15)]),
	rznSocial: string([maxLength(100)]),
	placa: string([maxLength(8)]),
	choferTipoDoc: string([minLength(1), maxLength(1)]),
	choferDoc: string([maxLength(11)]),
});
export type TransportistLoader = Input<typeof transportist_loader>;
