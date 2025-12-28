export interface TypeResolverInterface {
	getType(doc: Document): string | null;
	getTypeFromXml(xml: string | null): string | null;
}
