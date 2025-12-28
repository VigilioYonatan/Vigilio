import { type Input, maxLength, object, regex, string } from "@vigilio/valibot";

export const voided_detail_loader = object({
	tipoDoc: string(),
	serie: string(),
	correlativo: string([regex(/^[0-9]{1,8}$/)]),
	desMotivoBaja: string([maxLength(100)]),
});
export type VoidedDetailLoader = Input<typeof voided_detail_loader>;
