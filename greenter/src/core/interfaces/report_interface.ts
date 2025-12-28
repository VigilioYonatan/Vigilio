import type { DocumentInterface } from "../model/documentation_interface";

export interface ReportInterface {
	render(document: DocumentInterface, body: any[]): string | null;
}
