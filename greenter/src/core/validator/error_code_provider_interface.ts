export interface ErrorCodeProviderInterface {
	getAll(): any[] | null;
	getValue(code: string | null): string | null;
}
