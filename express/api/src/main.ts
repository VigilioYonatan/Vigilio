import { addAlias } from "module-alias";
import path from "path";
// here more absolute paths
addAlias("~", path.resolve(__dirname));
addAlias("@", path.resolve(__dirname, "services"));
import { Server } from "~/app/server";

const application = new Server();
export const app = application.app;
export const server = application.listen();
