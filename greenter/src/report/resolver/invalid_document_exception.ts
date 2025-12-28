export class InvalidDocumentException extends Error {
	constructor(message?: string) {
		super(message);
		this.name = "InvalidDocumentException";
	}
}
