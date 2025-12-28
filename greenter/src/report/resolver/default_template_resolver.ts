import type { DocumentInterface } from "../../core/model/documentation_interface";
import { InvalidDocumentException } from "./invalid_document_exception";
import type { TemplateResolverInterface } from "./template_resolver_interface";

export class DefaultTemplateResolver implements TemplateResolverInterface {
	public getTemplate(document: DocumentInterface): string | null {
		const className = document.constructor.name;
		let name: string;

		switch (className) {
			case "Invoice":
			case "Note":
				name = "invoice";
				break;
			case "Retention":
				name = "retention";
				break;
			case "Perception":
				name = "perception";
				break;
			case "Despatch":
				name = "despatch";
				break;
			case "Summary":
				name = "summary";
				break;
			case "Voided":
			case "Reversion":
				name = "voided";
				break;
			default:
				throw new InvalidDocumentException(
					"Not found template for " + className,
				);
		}

		return name + ".html.twig";
	}
}
