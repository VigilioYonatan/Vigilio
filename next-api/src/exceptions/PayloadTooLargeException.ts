import { HttpException } from "./HttpException";

export class PayloadTooLargeException extends HttpException {
    public name = "PayloadTooLargeException";

    /**
     * Instantiates a `PayloadTooLargeException` Exception with status code 413.
     *
     * @param message Error message (default: 'Payload Too Large')
     * @param errors Additional errors
     *
     * @example
     * `throw new PayloadTooLargeException()`
     */
    public constructor(
        message = "Payload Too Large",
        errors?: Record<string, unknown>
    ) {
        super(413, message, errors);
    }
}
