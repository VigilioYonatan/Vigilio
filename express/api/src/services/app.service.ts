import { Injectable } from "@decorators/di";

@Injectable()
export class AppService {
    index() {
        return "hello world";
    }
}
