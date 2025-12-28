import { PaymentTerms } from "../payment_terms";

export class FormaPagoCredito extends PaymentTerms {
	constructor(monto?: number, moneda?: string) {
		super();
		this.tipo = "Credito";
		this.monto = monto;
		this.moneda = moneda;
	}
}
