import { Voided } from "./voided";

export class Reversion extends Voided {
	public getXmlId(): string {
		const fecComunicacionPe = this.getDateWithTimezone(this.fecComunicacion);
		const parts = ["RR", fecComunicacionPe.format("Ymd"), this.correlativo];

		return parts
			.filter((part) => part !== undefined && part !== null)
			.join("-");
	}
}
