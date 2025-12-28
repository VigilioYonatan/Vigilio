import type { DocumentInterface } from "../model/documentation_interface";

export interface BuilderInterface {
	build(document: DocumentInterface): string | null;
}
