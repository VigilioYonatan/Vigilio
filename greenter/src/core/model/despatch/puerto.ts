export class Puerto {
	private codigo?: string;
	private nombre?: string;

	public getCodigo(): string | undefined {
		return this.codigo;
	}

	public setCodigo(codigo?: string): Puerto {
		this.codigo = codigo;
		return this;
	}

	public getNombre(): string | undefined {
		return this.nombre;
	}

	public setNombre(nombre?: string): Puerto {
		this.nombre = nombre;
		return this;
	}
}
