import { type Input, number, object, string } from "@vigilio/valibot";

export const sale_perception_loader = object({
	codReg: string(),
	mtoBase: number(),
	mto: number(),
	mtoTotal: number(),
	porcentaje: number(),
});
export type SalePerceptionLoader = Input<typeof sale_perception_loader>;
