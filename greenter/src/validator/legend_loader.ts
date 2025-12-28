import {
	type Input,
	maxLength,
	minLength,
	object,
	string,
} from "@vigilio/valibot";

export const legend_loader = object({
	code: string([minLength(4), maxLength(4)]),
	value: string([maxLength(100)]),
});
export type LegendLoader = Input<typeof legend_loader>;
