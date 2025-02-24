import { HttpException } from "./HttpException";

export class NotFoundException extends HttpException {
	public name = "NotFoundException";
	public isSuccess = false;
	/**
	 * Instantiates a `NotFoundException` Exception with status code 404.
	 *
	 * @param message Error message (default: 'Not found')
	 * @param errors Additional errors
	 *
	 * @example
	 * `throw new NotFoundException()`
	 */
	public constructor(message = "Not Found") {
		super(404, message);
		this.isSuccess = false;
	}
}
