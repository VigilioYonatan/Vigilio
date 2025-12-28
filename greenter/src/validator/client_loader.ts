import {
	type Input,
	maxLength,
	minLength,
	object,
	optional,
	string,
} from "@vigilio/valibot";

export const client_loader = object({
	tipoDoc: string([minLength(1), maxLength(1)]),
	numDoc: string([maxLength(15)]),
	rznSocial: string([maxLength(100)]),
	address: optional(object({})),
});
export type ClientLoader = Input<typeof client_loader>;
