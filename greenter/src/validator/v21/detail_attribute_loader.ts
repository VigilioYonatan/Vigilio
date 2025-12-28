import { type Input, object, string } from "@vigilio/valibot";

export const detail_attribute_loader = object({
	name: string(),
	code: string(),
});
export type DetailAttributeLoader = Input<typeof detail_attribute_loader>;
