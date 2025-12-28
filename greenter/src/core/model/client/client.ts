import type { Address } from "../company/address";

export class Client {
	private tipoDoc?: string;
	private numDoc?: string;
	private rznSocial?: string;
	private address?: Address;
	private email?: string;
	private telephone?: string;

	public getTipoDoc(): string | undefined {
		return this.tipoDoc;
	}

	public setTipoDoc(tipoDoc?: string): Client {
		this.tipoDoc = tipoDoc;
		return this;
	}

	public getNumDoc(): string | undefined {
		return this.numDoc;
	}

	public setNumDoc(numDoc?: string): Client {
		this.numDoc = numDoc;
		return this;
	}

	public getRznSocial(): string | undefined {
		return this.rznSocial;
	}

	public setRznSocial(rznSocial?: string): Client {
		this.rznSocial = rznSocial;
		return this;
	}

	public getAddress(): Address | undefined {
		return this.address;
	}

	public setAddress(address: Address | undefined): Client {
		this.address = address;
		return this;
	}

	public getEmail(): string | undefined {
		return this.email;
	}

	public setEmail(email?: string): Client {
		this.email = email;
		return this;
	}

	public getTelephone(): string | undefined {
		return this.telephone;
	}

	public setTelephone(telephone?: string): Client {
		this.telephone = telephone;
		return this;
	}
}
