import { HttpException } from "./HttpException";

export class BadRequestException extends HttpException {
    public name = "BadRequestException";

    /**
     * Instantiates a `BadRequestException` Exception with status code 400.
     *
     * @param message Error message (default: 'Bad Request')
     * @param errors Additional errors
     *
     * @example
     * `throw new BadRequestException()`
     */
    public constructor(
        message = "Bad Request",
        errors?: Record<string, unknown>
    ) {
        super(400, message, errors);
    }
}
