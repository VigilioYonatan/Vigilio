export interface RuleResolverInterface {
	getPath(typeDoc: string | null): string | null;
}
