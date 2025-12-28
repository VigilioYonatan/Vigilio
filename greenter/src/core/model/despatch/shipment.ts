import type { Direction } from "./direction";
import type { Driver } from "./driver";
import type { Puerto } from "./puerto";
import type { Transportist } from "./transportist";
import type { Vehicle } from "./vehicle";

export class Shipment {
	private codTraslado?: string;
	private desTraslado?: string;
	private sustentoPeso?: string;
	private indTransbordo?: boolean;
	private indicadores?: string[];
	private pesoItems?: number;
	private pesoTotal?: number;
	private undPesoTotal?: string;
	private numBultos?: number;
	private modTraslado?: string;
	private fecTraslado?: Date;
	private numContenedor?: string;
	private contenedores?: string[];
	private codPuerto?: string;
	private puerto?: Puerto;
	private aeropuerto?: Puerto;
	private transportista?: Transportist;
	private vehiculo?: Vehicle;
	private choferes?: Driver[];
	private llegada?: Direction;
	private partida?: Direction;

	public getCodTraslado(): string | undefined {
		return this.codTraslado;
	}

	public setCodTraslado(codTraslado?: string): Shipment {
		this.codTraslado = codTraslado;
		return this;
	}

	public getDesTraslado(): string | undefined {
		return this.desTraslado;
	}

	public setDesTraslado(desTraslado?: string): Shipment {
		this.desTraslado = desTraslado;
		return this;
	}

	public getSustentoPeso(): string | undefined {
		return this.sustentoPeso;
	}

	public setSustentoPeso(sustentoPeso?: string): Shipment {
		this.sustentoPeso = sustentoPeso;
		return this;
	}

	public isIndTransbordo(): boolean | undefined {
		return this.indTransbordo;
	}

	public setIndTransbordo(indTransbordo: boolean | undefined): Shipment {
		this.indTransbordo = indTransbordo;
		return this;
	}

	public getIndicadores(): string[] | undefined {
		return this.indicadores;
	}

	public setIndicadores(indicadores: string[] | undefined): Shipment {
		this.indicadores = indicadores;
		return this;
	}

	public getPesoItems(): number | undefined {
		return this.pesoItems;
	}

	public setPesoItems(pesoItems?: number): Shipment {
		this.pesoItems = pesoItems;
		return this;
	}

	public getPesoTotal(): number | undefined {
		return this.pesoTotal;
	}

	public setPesoTotal(pesoTotal?: number): Shipment {
		this.pesoTotal = pesoTotal;
		return this;
	}

	public getUndPesoTotal(): string | undefined {
		return this.undPesoTotal;
	}

	public setUndPesoTotal(undPesoTotal?: string): Shipment {
		this.undPesoTotal = undPesoTotal;
		return this;
	}

	public getNumBultos(): number | undefined {
		return this.numBultos;
	}

	public setNumBultos(numBultos?: number): Shipment {
		this.numBultos = numBultos;
		return this;
	}

	public getModTraslado(): string | undefined {
		return this.modTraslado;
	}

	public setModTraslado(modTraslado?: string): Shipment {
		this.modTraslado = modTraslado;
		return this;
	}

	public getFecTraslado(): Date | undefined {
		return this.fecTraslado;
	}

	public setFecTraslado(fecTraslado: Date | undefined): Shipment {
		this.fecTraslado = fecTraslado;
		return this;
	}

	public getNumContenedor(): string | undefined {
		return this.numContenedor;
	}

	public setNumContenedor(numContenedor?: string): Shipment {
		this.numContenedor = numContenedor;
		return this;
	}

	public getContenedores(): string[] | undefined {
		return this.contenedores;
	}

	public setContenedores(contenedores: string[] | undefined): Shipment {
		this.contenedores = contenedores;
		return this;
	}

	public getCodPuerto(): string | undefined {
		return this.codPuerto;
	}

	public setCodPuerto(codPuerto?: string): Shipment {
		this.codPuerto = codPuerto;
		return this;
	}

	public getPuerto(): Puerto | undefined {
		return this.puerto;
	}

	public setPuerto(puerto: Puerto | undefined): Shipment {
		this.puerto = puerto;
		return this;
	}

	public getAeropuerto(): Puerto | undefined {
		return this.aeropuerto;
	}

	public setAeropuerto(aeropuerto: Puerto | undefined): Shipment {
		this.aeropuerto = aeropuerto;
		return this;
	}

	public getTransportista(): Transportist | undefined {
		return this.transportista;
	}

	public setTransportista(transportista: Transportist | undefined): Shipment {
		this.transportista = transportista;
		return this;
	}

	public getVehiculo(): Vehicle | undefined {
		return this.vehiculo;
	}

	public setVehiculo(vehiculo?: Vehicle): Shipment {
		this.vehiculo = vehiculo;
		return this;
	}

	public getChoferes(): Driver[] | undefined {
		return this.choferes;
	}

	public setChoferes(choferes: Driver[] | undefined): Shipment {
		this.choferes = choferes;
		return this;
	}

	public getLlegada(): Direction | undefined {
		return this.llegada;
	}

	public setLlegada(llegada: Direction | undefined): Shipment {
		this.llegada = llegada;
		return this;
	}

	public getPartida(): Direction | undefined {
		return this.partida;
	}

	public setPartida(partida: Direction | undefined): Shipment {
		this.partida = partida;
		return this;
	}
}
