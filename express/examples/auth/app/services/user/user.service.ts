import { Injectable } from "@decorators/di";

@Injectable()
export class UserService {
    async index() {}

    async show(id: string) {
        return id;
    }

    async store() {}

    async update() {}

    async destroy(id: string) {
        return id;
    }
}
