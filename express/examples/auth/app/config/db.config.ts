import { Sequelize } from "sequelize-typescript";
import { enviroments } from "./enviroments.config";
import { logger } from "@vigilio/express-core/helpers";
import { UserEntity } from "@/user/entities/user.entity";

const sequelize = new Sequelize({
    dialect: "mysql",
    host: enviroments.DB_HOST,
    username: enviroments.DB_USER,
    password: enviroments.DB_PASS,
    database: enviroments.DB_NAME,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
});

sequelize.addModels([UserEntity]);

export async function connectDB() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        logger.success("conectado a base de datos correctamente");
    } catch (error) {
        logger.error(`Error al conectar base de datos: ${error}`);
    }
}
export { sequelize };
