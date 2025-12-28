import type { DocumentInterface } from "../../core/model/documentation_interface";

export interface TemplateResolverInterface {
	getTemplate(document: DocumentInterface): string | null;
}
