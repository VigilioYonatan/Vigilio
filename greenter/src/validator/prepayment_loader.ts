import {
	type Input,
	maxLength,
	minLength,
	number,
	object,
	string,
} from "@vigilio/valibot";

export const prepayment_loader = object({
	tipoDocRel: string([minLength(2), maxLength(2)]),
	nroDocRel: string([maxLength(30)]),
	total: number(),
});
export type PrepaymentLoader = Input<typeof prepayment_loader>;
