import { type Input, object, string } from "@vigilio/valibot";

export const forma_pago_contado_loader = object({
	tipo: string(),
});
export type FormaPagoContadoLoader = Input<typeof forma_pago_contado_loader>;
