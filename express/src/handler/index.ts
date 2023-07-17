import { ErrorMiddleware } from "@decorators/express";
import { NextFunction, Request, Response } from "express";
export class NotFoundException extends Error {
    public readonly errorCode: number = 404;
    constructor(message: string, public props?: Object) {
        super(message);
        this.props = props;
    }
}

export class BadRequestException extends NotFoundException {
    public readonly errorCode: number = 400;
}
export class UnauthorizedException extends NotFoundException {
    public readonly errorCode: number = 401;
}
export class ForbiddenException extends NotFoundException {
    public readonly errorCode: number = 403;
}
export class InternatServerErrorException extends NotFoundException {
    public readonly errorCode: number = 500;
}

export class ServerErrorMiddleware implements ErrorMiddleware {
    use(error: Error, _: Request, response: Response, next: NextFunction) {
        if (error instanceof NotFoundException) {
            return responseData(response, error);
        }

        if (error instanceof BadRequestException) {
            return responseData(response, error);
        }

        next(error);
    }
}

function responseData(response: Response, error: NotFoundException) {
    return response.status(error.errorCode).json({
        success: false,
        message: error.message,
        ...error.props,
    });
}
