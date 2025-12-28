import {
	type Input,
	maxLength,
	object,
	optional,
	regex,
	string,
} from "@vigilio/valibot";

export const company_loader = object({
	ruc: string([regex(/^[0-9]{11}$/)]),
	razonSocial: string([maxLength(100)]),
	nombreComercial: optional(string([maxLength(100)])),
	address: optional(object({})),
});
export type CompanyLoader = Input<typeof company_loader>;
