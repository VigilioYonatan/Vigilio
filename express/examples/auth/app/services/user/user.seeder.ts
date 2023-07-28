import { customArray } from "@vigilio/express-core/helpers";
import { faker } from "@faker-js/faker";
import { hashSync, genSaltSync } from "bcryptjs";
export const userSeed: { name: string; email: string; password: string }[] =
    customArray(20).map(() => ({
        name: faker.person.firstName(),
        email: faker.internet.email(),
        password: hashSync("123456", genSaltSync(10)),
    }));
