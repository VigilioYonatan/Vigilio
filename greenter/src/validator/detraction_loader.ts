import { type Input, number, object } from "@vigilio/valibot";

export const detraction_loader = object({
	percent: number(),
	mount: number(),
});
export type DetractionLoader = Input<typeof detraction_loader>;
