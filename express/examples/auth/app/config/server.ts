import express from "express";
import path from "path";
import session from "express-session";
import passport from "passport";
import { ERROR_MIDDLEWARE, attachControllers } from "@decorators/express";
import { enviroments } from "~/config/enviroments.config";
import { connectDB } from "~/config/db.config";
import { apiRouters } from "~/routers/api";
import { Container } from "@decorators/di";
import { ServerErrorMiddleware } from "@vigilio/express-core/handler";
import { logger } from "@vigilio/express-core/helpers";
import { client } from "@vigilio/express-core/client";
import { webRouters } from "~/routers/web";
import { authRouters } from "~/routers/auth";
import { UserEntity } from "@/user/entities/user.entity";
import {
    facebookStrategy,
    googleStrategy,
    instagramStrategy,
    localStrategy,
} from "@/auth/auth.strategy";
import { MessageController } from "~/services/Message.socket";

export class Server {
    public readonly app: express.Application = express();

    constructor() {
        this.middlewares();
        this.auth();
        this.routes();
    }

    auth() {
        this.app.use(
            session({
                secret: "thisisasecret",
                resave: false,
                saveUninitialized: false,
                cookie: {
                    secure: false, //true in production
                    httpOnly: true,
                    maxAge: 24 * 60 * 60 * 1000, // 1 dia
                },
            })
        );
        this.app.use(passport.initialize());
        this.app.use(passport.session());
        passport.use(googleStrategy);
        passport.use(facebookStrategy);
        passport.use(instagramStrategy);
        passport.use(localStrategy);

        passport.serializeUser((user, done) => {
            return done(null, user);
        });
        passport.deserializeUser(async (user: { id: number }, done) => {
            const usuario = await UserEntity.findByPk(user.id);
            if (!usuario) return done({ message: "error authenticated" });
            return done(null, usuario);
        });
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(
            express.static(path.resolve(__dirname, "..", "..", "public"))
        );
        this.app.set("view engine", "pug");
        this.app.set(
            "views",
            path.resolve(__dirname, "..", "..", "resources", "views")
        );
        this.app.use(client());

        connectDB();
    }

    routes() {
        const apiRouter = express.Router();
        const webRouter = express.Router();
        const authRouter = express.Router();
        attachControllers(apiRouter, apiRouters);
        attachControllers(webRouter, webRouters);
        attachControllers(authRouter, authRouters);
        Container.provide([
            { provide: ERROR_MIDDLEWARE, useClass: ServerErrorMiddleware },
        ]);

        this.app.use("/", webRouter);
        this.app.use("/auth", authRouter);
        this.app.use("/api", apiRouter);
    }

    listen() {
        const server = this.app.listen(enviroments.PORT, () => {
            logger.primary(`Run server in port ${enviroments.PORT}`);
        });

        return server;
    }
}
