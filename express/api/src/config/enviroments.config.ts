import dotenv from "dotenv";
dotenv.config({ path: ".env" });

const productionEnviroments = {
	NODE_ENV: process.env.NODE_ENV,
	PORT: process.env.NODE_URL,
	DB_HOST: process.env.DB_HOST,
	DB_NAME: process.env.DB_NAME,
	DB_USER: process.env.DB_USER,
	DB_PASS: process.env.DB_PASS,
	SECRET_JWT_KEY: process.env.SECRET_JWT_KEY,
};

const developmentEnviroments = {
	...productionEnviroments,
	PORT: 4000,
	DB_HOST: "localhost",
	DB_NAME: "test",
	DB_USER: "root",
	DB_PASS: "",
};
const testEnviroments = {
	...productionEnviroments,
	PORT: 5000,
	DB_HOST: "localhost",
	DB_NAME: "test",
	DB_USER: "root",
	DB_PASS: "",
};

export const enviroments =
	process.env.NODE_ENV === "production"
		? productionEnviroments
		: process.env.NODE_ENV === "test"
		? testEnviroments
		: developmentEnviroments;
