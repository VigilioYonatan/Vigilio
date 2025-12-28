import type { LoaderListenerInterface } from "./loader_metadata_interface";

export class CustomMetadataFactory {
	private version?: string;
	private listener?: LoaderListenerInterface;

	public setVersion(version: string | null): void {
		this.version = version || undefined;
	}

	public setListener(listener: LoaderListenerInterface): void {
		this.listener = listener;
	}

	public getMetadataFor<T>(value: T): BaseSchema<Input<T>, T> | null {
		const fullClass = this.getClassValidator(value);

		if (!fullClass) {
			return null;
		}

		const loader = new fullClass() as LoaderMetadataInterface;
		const metadata = loader.load();

		if (this.listener) {
			this.listener.onLoaded(value, metadata);
		}

		return metadata;
	}

	public hasMetadataFor<T>(value: T): boolean {
		return !!this.getClassValidator(value);
	}

	private getClassValidator<T>(value: T): any | null {
		const classModel = value.constructor.name;
		const className = classModel;
		const version = this.getFormatVersion();

		if (version) {
			const fullClass = `Greenter.Validator.Loader.${version}.${className}Loader`;
			// En TypeScript necesitaríamos un sistema de registro de clases
			// Por simplicidad, asumimos que las clases están disponibles
			try {
				const loaderClass = eval(fullClass);
				if (loaderClass) {
					return loaderClass;
				}
			} catch (e) {
				// Si no existe, continuamos
			}
		}

		const fullClass = `Greenter.Validator.Loader.${className}Loader`;
		try {
			const loaderClass = eval(fullClass);
			return loaderClass || null;
		} catch (e) {
			return null;
		}
	}

	private getFormatVersion(): string | null {
		if (!this.version) {
			return null;
		}

		return "v" + this.version.replace(/\./g, "");
	}
}
