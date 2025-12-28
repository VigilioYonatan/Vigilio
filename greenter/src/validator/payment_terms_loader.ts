import {
	type Input,
	maxLength,
	minLength,
	object,
	string,
} from "@vigilio/valibot";

export const payment_terms_loader = object({
	tipo: string(),
	moneda: string([minLength(3), maxLength(3)]),
});
export type PaymentTermsLoader = Input<typeof payment_terms_loader>;
