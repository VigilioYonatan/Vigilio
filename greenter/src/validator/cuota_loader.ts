import {
	type Input,
	maxLength,
	minLength,
	number,
	object,
	string,
} from "@vigilio/valibot";

export const cuota_loader = object({
	moneda: string([minLength(3), maxLength(3)]),
	monto: number(),
	fechaPago: string(),
});
export type CuotaLoader = Input<typeof cuota_loader>;
