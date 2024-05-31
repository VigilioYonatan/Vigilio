import { SeedController } from "@/seed/seed.api.controller";
import { AuthApiController } from "@/auth/auth.api.controller";

export const apiRouters: Type[] = [SeedController, AuthApiController];
