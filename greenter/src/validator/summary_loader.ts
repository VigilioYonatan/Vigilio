import { array, type Input, maxLength, object, string } from "@vigilio/valibot";

export const summary_loader = object({
	correlativo: string([maxLength(5)]),
	fecGeneracion: string(),
	fecResumen: string(),
	company: object({}),
	details: array(object({})),
	moneda: string(),
});
export type SummaryLoader = Input<typeof summary_loader>;
