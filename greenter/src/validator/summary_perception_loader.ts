import { type Input, number, object, regex, string } from "@vigilio/valibot";

export const summary_perception_loader = object({
	codReg: string([regex(/^(01|02|03)$/)]),
	tasa: number(),
	mtoBase: number(),
	mto: number(),
	mtoTotal: number(),
});
export type SummaryPerceptionLoader = Input<typeof summary_perception_loader>;
