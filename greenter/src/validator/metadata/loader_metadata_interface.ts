import type { BaseSchema, Input } from "@vigilio/valibot";

export interface LoaderListenerInterface {
	onLoaded<T>(value: T, metadata: BaseSchema<Input<T>, T>): void;
}

export interface LoaderMetadataInterface {
	load(): BaseSchema<any, any>;
}

export class CustomMetadataFactory {
	private version?: string;
	private listener?: LoaderListenerInterface;
	private loaderRegistry: Map<string, new () => LoaderMetadataInterface> =
		new Map();

	constructor() {
		this.registerLoaders();
	}

	public setVersion(version: string | null): void {
		this.version = version || undefined;
	}

	public setListener(listener: LoaderListenerInterface): void {
		this.listener = listener;
	}

	public registerLoader(
		className: string,
		loaderClass: new () => LoaderMetadataInterface,
	): void {
		this.loaderRegistry.set(className, loaderClass);
	}

	public getMetadataFor<T>(value: T): BaseSchema<Input<T>, T> | null {
		const loaderClass = this.getClassValidator(value);

		if (!loaderClass) {
			return null;
		}

		const loader = new loaderClass();
		const metadata = loader.load();

		if (this.listener) {
			this.listener.onLoaded(value, metadata);
		}

		return metadata;
	}

	public hasMetadataFor<T>(value: T): boolean {
		return !!this.getClassValidator(value);
	}

	private getClassValidator<T>(
		value: T,
	): (new () => LoaderMetadataInterface) | null {
		const classModel = value.constructor.name;
		const className = classModel;
		const version = this.getFormatVersion();

		// Buscar con versión primero
		if (version) {
			const versionedKey = `${version}.${className}Loader`;
			const loaderClass = this.loaderRegistry.get(versionedKey);
			if (loaderClass) {
				return loaderClass;
			}
		}

		// Buscar sin versión
		const defaultKey = `${className}Loader`;
		return this.loaderRegistry.get(defaultKey) || null;
	}

	private getFormatVersion(): string | null {
		if (!this.version) {
			return null;
		}

		return "v" + this.version.replace(/\./g, "");
	}

	private registerLoaders(): void {
		// Aquí se registrarían todos los loaders disponibles
		// Ejemplo:
		// this.registerLoader('InvoiceLoader', InvoiceLoader);
		// this.registerLoader('v21.InvoiceLoader', InvoiceLoaderV21);
	}
}
