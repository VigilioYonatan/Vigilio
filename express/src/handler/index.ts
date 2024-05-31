import type { NextFunction, Request, Response } from "express";
export class NotFoundException extends Error {
    public readonly errorCode: number = 404;
    constructor(message: string, public props?: object) {
        super(message);
        this.props = props;
    }
}

export class Redirect {
    constructor(public uri: string) {
        this.uri = uri;
    }
}

export class BadRequestException extends NotFoundException {
    public readonly errorCode: number = 400;
}
export class UnauthorizedException extends NotFoundException {
    public readonly errorCode: number = 401;
}
export class PaymentRequiredException extends NotFoundException {
    public readonly errorCode: number = 402;
}
export class ForbiddenException extends NotFoundException {
    public readonly errorCode: number = 403;
}

export class InternalServerErrorException extends NotFoundException {
    public readonly errorCode: number = 500;
}

export class ServerErrorMiddleware {
    use(error: Error, _req: Request, response: Response, next: NextFunction) {
        if (error instanceof NotFoundException) {
            return responseData(response, error);
        }

        if (error instanceof Redirect) {
            return response.redirect(error.uri);
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
