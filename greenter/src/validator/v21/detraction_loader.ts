import {
	array,
	type Input,
	number,
	object,
	optional,
	string,
} from "@vigilio/valibot";

export const detraction_loader = object({
	percent: number(),
	mount: number(),
	codMedioPago: string(),
	ctaBanco: string(),
	codBienDetraccion: string(),
});
export type DetractionLoader = Input<typeof detraction_loader>;
