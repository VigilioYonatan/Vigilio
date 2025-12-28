import type { Legend } from "../../core/model/sale/legend";

export class ResolveFilter {
	public getValueLegend(
		legends: Legend[],
		code: string,
	): string | undefined | null {
		for (const legend of legends) {
			if (legend.getCode() === code) {
				return legend.getValue();
			}
		}
		return null;
	}
}
