export class FormatFilter {
	public number(number: number, decimals: number = 2): string | null {
		return number.toFixed(decimals);
	}
}
