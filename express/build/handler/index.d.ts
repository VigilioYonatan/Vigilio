import { ErrorMiddleware } from "@decorators/express";
import { NextFunction, Request, Response } from "express";
export declare class NotFoundException extends Error {
    props?: Object | undefined;
    readonly errorCode: number;
    constructor(message: string, props?: Object | undefined);
}
export declare class BadRequestException extends NotFoundException {
    readonly errorCode: number;
}
export declare class UnauthorizedException extends NotFoundException {
    readonly errorCode: number;
}
export declare class ForbiddenException extends NotFoundException {
    readonly errorCode: number;
}
export declare class InternatServerErrorException extends NotFoundException {
    readonly errorCode: number;
}
export declare class ServerErrorMiddleware implements ErrorMiddleware {
    use(error: Error, _: Request, response: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
}
