import type { DocumentInterface } from "../model/documentation_interface";

export interface DocumentValidatorInterface {
	validate(document: DocumentInterface): object | null;
}
