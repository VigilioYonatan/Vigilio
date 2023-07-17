import { Pipe } from "./decorators/pipe.decorator";
import { Upload } from "./decorators/upload.decorator";
import { Validator } from "./decorators/validator.decorator";
import * as handler from "./handler";

export default { ...handler, Pipe, Upload, Validator };
