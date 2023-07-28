import { Controller, Get } from "@decorators/express";
import { sequelize } from "~/config/db.config";
import { enviroments } from "~/config/enviroments.config";
import { UserEntity } from "@/user/entities/user.entity";
import { userSeed } from "../user/user.seeder";

@Controller("/seed")
export class SeedController {
    @Get("/")
    async index() {
        if (enviroments.NODE_ENV === "production") return;
        await sequelize.sync({ force: true });

        await Promise.all([UserEntity.bulkCreate(userSeed)]);
        return {
            success: true,
            message: "seed executed",
        };
    }
}
