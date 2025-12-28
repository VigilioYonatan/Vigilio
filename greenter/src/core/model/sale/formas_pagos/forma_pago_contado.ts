import { PaymentTerms } from "../payment_terms";

export class FormaPagoContado extends PaymentTerms {
	constructor() {
		super();
		this.tipo = "Contado";
		this.moneda = undefined;
		this.monto = undefined;
	}
}
