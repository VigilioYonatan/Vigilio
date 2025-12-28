import {
	type Input,
	maxLength,
	minLength,
	number,
	object,
	string,
} from "@vigilio/valibot";

export const forma_pago_credito_loader = object({
	tipo: string(),
	moneda: string([minLength(3), maxLength(3)]),
	monto: number(),
});
export type FormaPagoCreditoLoader = Input<typeof forma_pago_credito_loader>;
