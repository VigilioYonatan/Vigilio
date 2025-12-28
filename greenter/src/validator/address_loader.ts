import {
	type Input,
	maxLength,
	object,
	optional,
	string,
} from "@vigilio/valibot";

export const address_loader = object({
	ubigueo: string([maxLength(6)]),
	codigoPais: optional(string([maxLength(2)])),
	departamento: optional(string([maxLength(30)])),
	provincia: optional(string([maxLength(30)])),
	distrito: optional(string([maxLength(100)])),
	urbanizacion: optional(string([maxLength(25)])),
	direccion: optional(string([maxLength(100)])),
	codLocal: string(),
});
export type AddressLoader = Input<typeof address_loader>;
