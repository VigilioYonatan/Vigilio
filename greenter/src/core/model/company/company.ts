import type { Address } from "./address";

export class Company {
	constructor(
		private _ruc?: string,
		private _razonSocial?: string,
		private _nombreComercial?: string,
		private _address?: Address,
		private _email?: string,
		private _telephone?: string,
	) {}

	get ruc(): string | undefined {
		return this._ruc;
	}

	set ruc(ruc: string | undefined) {
		this._ruc = ruc;
	}

	get razonSocial(): string | undefined {
		return this._razonSocial;
	}

	set razonSocial(razonSocial: string | undefined) {
		this._razonSocial = razonSocial;
	}

	get nombreComercial(): string | undefined {
		return this._nombreComercial;
	}

	set nombreComercial(nombreComercial: string | undefined) {
		this._nombreComercial = nombreComercial;
	}

	get address(): Address | undefined {
		return this._address;
	}

	set address(address: Address | undefined) {
		this._address = address;
	}

	get email(): string | undefined {
		return this._email;
	}

	set email(email: string | undefined) {
		this._email = email;
	}

	get telephone(): string | undefined {
		return this._telephone;
	}

	set telephone(telephone: string | undefined) {
		this._telephone = telephone;
	}
}
