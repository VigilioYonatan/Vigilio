import { CpeError } from "../entity/cpe_error";
import { ErrorLevel } from "../enum/error_level";
import type { ResultParserInterface } from "../interfaces/result_parser_interface";

export class ErrorResultParser implements ResultParserInterface {
    public parse(raw: string | null): CpeError | null {
        if (!raw) return null;

        const parts = raw.split("|");
        const len = parts.length;
        if (len < 3) {
            return null;
        }

        const error = new CpeError()
            .setLevel(
                parts[0] === "1" ? ErrorLevel.EXCEPTION : ErrorLevel.OBSERVATION
            )
            .setCode(parts[1])
            .setMessage(parts[2]);

        if (len >= 5) {
            error.setNodePath(parts[3]);
            error.setNodeValue(parts[4]);
        }

        return error;
    }
}
