import { Injectable } from "@vigilio/express-core";
import {
    Controller,
    Delete,
    Get,
    Post,
    Put,
    Status,
} from "@decorators/express";

@Injectable()
@Controller("/controller")
export class UserController {
    @Get("/")
    async index() {}

    @Get("/:id")
    async show() {}

    @Status(201)
    @Post("/")
    async store() {}

    @Status(201)
    @Put("/")
    async update() {}

    @Status(201)
    @Delete("/")
    async destroy() {}
}
