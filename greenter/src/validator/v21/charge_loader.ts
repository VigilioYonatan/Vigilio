import { type Input, object, string } from "@vigilio/valibot";

export const charge_loader = object({
	factor: string(),
	monto: string(),
	monto_base: string(),
	cod_tipo: string(),
});
export type ChargeLoader = Input<typeof charge_loader>;
