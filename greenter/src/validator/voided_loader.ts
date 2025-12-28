import { array, type Input, maxLength, object, string } from "@vigilio/valibot";

export const voided_loader = object({
	correlativo: string([maxLength(5)]),
	fecGeneracion: string(),
	fecComunicacion: string(),
	company: object({}),
	details: array(object({})),
});
export type VoidedLoader = Input<typeof voided_loader>;
