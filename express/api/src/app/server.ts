import express from "express";
import cors from "cors";
import passport from "passport";
import { ERROR_MIDDLEWARE, attachControllers } from "@decorators/express";
import { enviroments } from "~/config/enviroments.config";
import { connectDB } from "~/config/db.config";
import { apiRouters } from "~/routers/api";
import { Container } from "@decorators/di";
import { ServerErrorMiddleware } from "@vigilio/express/handler";
import { logger } from "@vigilio/express/helpers";
import { ExtractJwt, Strategy, StrategyOptions } from "passport-jwt";

export class Server {
	public readonly app: express.Application = express();

	constructor() {
		this.middlewares();
		this.auth();
		this.routes();
	}

	auth() {
		const jwtOptions: StrategyOptions = {
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: enviroments.SECRET_JWT_KEY,
		};
		const strategy = new Strategy(jwtOptions, async (_jwtpayload, _done) => {
			// done(null, user);
		});

		passport.use(strategy);
	}

	middlewares() {
		this.app.use(cors());
		this.app.use(express.json());
		connectDB();
	}

	routes() {
		const apiRouter = express.Router();
		attachControllers(apiRouter, apiRouters);
		Container.provide([
			{ provide: ERROR_MIDDLEWARE, useClass: ServerErrorMiddleware },
		]);
		this.app.use("/api", apiRouter);
	}

	listen() {
		const server = this.app.listen(enviroments.PORT, () => {
			logger.primary(`Run server in port ${enviroments.PORT}`);
		});

		return server;
	}
}
