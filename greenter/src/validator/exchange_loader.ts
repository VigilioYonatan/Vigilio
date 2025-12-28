import { type Input, number, object, string } from "@vigilio/valibot";

export const exchange_loader = object({
	monedaRef: string(),
	monedaObj: string(),
	factor: number(),
	fecha: string(),
});
export type ExchangeLoader = Input<typeof exchange_loader>;
