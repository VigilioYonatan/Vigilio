import type { Client } from "../client/client";
import type { Direction } from "../despatch/direction";

export class EmbededDespatch {
	private llegada?: Direction;
	private partida?: Direction;
	private transportista?: Client;
	private nroLicencia?: string;
	private transpPlaca?: string;
	private transpCodeAuth?: string;
	private transpMarca?: string;
	private modTraslado?: string;
	private pesoBruto?: number;
	private undPesoBruto?: string;

	public getLlegada(): Direction | undefined {
		return this.llegada;
	}

	public setLlegada(llegada: Direction | undefined): EmbededDespatch {
		this.llegada = llegada;
		return this;
	}

	public getPartida(): Direction | undefined {
		return this.partida;
	}

	public setPartida(partida: Direction | undefined): EmbededDespatch {
		this.partida = partida;
		return this;
	}

	public getTransportista(): Client | undefined {
		return this.transportista;
	}

	public setTransportista(transportista: Client | undefined): EmbededDespatch {
		this.transportista = transportista;
		return this;
	}

	public getNroLicencia(): string | undefined {
		return this.nroLicencia;
	}

	public setNroLicencia(nroLicencia?: string): EmbededDespatch {
		this.nroLicencia = nroLicencia;
		return this;
	}

	public getTranspPlaca(): string | undefined {
		return this.transpPlaca;
	}

	public setTranspPlaca(transpPlaca?: string): EmbededDespatch {
		this.transpPlaca = transpPlaca;
		return this;
	}

	public getTranspCodeAuth(): string | undefined {
		return this.transpCodeAuth;
	}

	public setTranspCodeAuth(
		transpCodeAuth: string | undefined,
	): EmbededDespatch {
		this.transpCodeAuth = transpCodeAuth;
		return this;
	}

	public getTranspMarca(): string | undefined {
		return this.transpMarca;
	}

	public setTranspMarca(transpMarca?: string): EmbededDespatch {
		this.transpMarca = transpMarca;
		return this;
	}

	public getModTraslado(): string | undefined {
		return this.modTraslado;
	}

	public setModTraslado(modTraslado?: string): EmbededDespatch {
		this.modTraslado = modTraslado;
		return this;
	}

	public getPesoBruto(): number | undefined {
		return this.pesoBruto;
	}

	public setPesoBruto(pesoBruto?: number): EmbededDespatch {
		this.pesoBruto = pesoBruto;
		return this;
	}

	public getUndPesoBruto(): string | undefined {
		return this.undPesoBruto;
	}

	public setUndPesoBruto(undPesoBruto?: string): EmbededDespatch {
		this.undPesoBruto = undPesoBruto;
		return this;
	}
}
