import { Pipe } from "./decorators/pipe.decorator";
import { Upload } from "./decorators/upload.decorator";
import { Validator } from "./decorators/validator.decorator";
import * as handler from "./handler";
declare const _default: {
    Pipe: typeof Pipe;
    Upload: typeof Upload;
    Validator: typeof Validator;
    NotFoundException: typeof handler.NotFoundException;
    BadRequestException: typeof handler.BadRequestException;
    UnauthorizedException: typeof handler.UnauthorizedException;
    ForbiddenException: typeof handler.ForbiddenException;
    InternatServerErrorException: typeof handler.InternatServerErrorException;
    ServerErrorMiddleware: typeof handler.ServerErrorMiddleware;
};
export default _default;
