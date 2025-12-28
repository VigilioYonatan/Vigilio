import twig from "twig";

export class RuntimeLoader {
	public load(className: any): any {
		return new className();
	}
}
