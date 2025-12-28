import type { DocumentInterface } from "../model/documentation_interface";

export interface DocumentParserInterface {
	parse(value: unknown): DocumentInterface | undefined;
}
