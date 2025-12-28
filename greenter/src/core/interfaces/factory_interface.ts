import type { DocumentInterface } from "../model/documentation_interface";
import type { BaseResult } from "../model/response/base_result";

export interface FactoryInterface {
	send(document: DocumentInterface): BaseResult | null;
}
