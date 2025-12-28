import {
	type Input,
	maxLength,
	minLength,
	number,
	object,
	string,
} from "@vigilio/valibot";

export const payment_loader = object({
	moneda: string([minLength(3), maxLength(3)]),
	importe: number(),
	fecha: string(),
});
export type PaymentLoader = Input<typeof payment_loader>;
