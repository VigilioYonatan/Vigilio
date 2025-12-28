/**
 * Class DetailAttribute.
 */
export class DetailAttribute {
	private code?: string;
	private name?: string;
	private value?: string;
	private fecInicio?: Date;
	private fecFin?: Date;
	private duracion?: number;

	public getCode(): string | undefined {
		return this.code;
	}

	public setCode(code: string | undefined): DetailAttribute {
		this.code = code;
		return this;
	}

	public getName(): string | undefined {
		return this.name;
	}

	public setName(name: string | undefined): DetailAttribute {
		this.name = name;
		return this;
	}

	public getValue(): string | undefined {
		return this.value;
	}

	public setValue(value: string | undefined): DetailAttribute {
		this.value = value;
		return this;
	}

	public getFecInicio(): Date | undefined {
		return this.fecInicio;
	}

	public setFecInicio(fecInicio: Date | undefined): DetailAttribute {
		this.fecInicio = fecInicio;
		return this;
	}

	public getFecFin(): Date | undefined {
		return this.fecFin;
	}

	public setFecFin(fecFin: Date | undefined): DetailAttribute {
		this.fecFin = fecFin;
		return this;
	}

	public getDuracion(): number | undefined {
		return this.duracion;
	}

	public setDuracion(duracion: number | undefined): DetailAttribute {
		this.duracion = duracion;
		return this;
	}
}
