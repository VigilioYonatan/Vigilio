"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerErrorMiddleware = exports.InternatServerErrorException = exports.ForbiddenException = exports.UnauthorizedException = exports.BadRequestException = exports.NotFoundException = void 0;
class NotFoundException extends Error {
    constructor(message, props) {
        super(message);
        this.props = props;
        this.errorCode = 404;
        this.props = props;
    }
}
exports.NotFoundException = NotFoundException;
class BadRequestException extends NotFoundException {
    constructor() {
        super(...arguments);
        this.errorCode = 400;
    }
}
exports.BadRequestException = BadRequestException;
class UnauthorizedException extends NotFoundException {
    constructor() {
        super(...arguments);
        this.errorCode = 401;
    }
}
exports.UnauthorizedException = UnauthorizedException;
class ForbiddenException extends NotFoundException {
    constructor() {
        super(...arguments);
        this.errorCode = 403;
    }
}
exports.ForbiddenException = ForbiddenException;
class InternatServerErrorException extends NotFoundException {
    constructor() {
        super(...arguments);
        this.errorCode = 500;
    }
}
exports.InternatServerErrorException = InternatServerErrorException;
class ServerErrorMiddleware {
    use(error, _, response, next) {
        if (error instanceof NotFoundException) {
            return responseData(response, error);
        }
        if (error instanceof BadRequestException) {
            return responseData(response, error);
        }
        next(error);
    }
}
exports.ServerErrorMiddleware = ServerErrorMiddleware;
function responseData(response, error) {
    return response.status(error.errorCode).json(Object.assign({ success: false, message: error.message }, error.props));
}
