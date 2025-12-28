import {
	type Input,
	maxLength,
	minLength,
	object,
	string,
} from "@vigilio/valibot";

export const document_loader = object({
	tipoDoc: string([minLength(2), maxLength(2)]),
	nroDoc: string([maxLength(30)]),
});
export type DocumentLoader = Input<typeof document_loader>;
