# @Vigilio/next-api

<div style="display:flex;align-items:center;"><img src="logo.png" style="object-fit:contain;" width="150" height="150" alt="logo"/>

<img src="next-api.png" style="object-fit:contain;" width="100" height="100" alt="logo"/></div>

A simple library for use next api (no app pages).

```cmd
npm add @vigilio/next-api
```

### Getting Started

```ts
// /src/pages/api/[[...params]].ts

import { createHandler, Get } from "@vigilio/next-api";

class UsersController {
    @Get()
    public async users() {
        return await DB.findUsers();
    }
}

export default createHandler([UsersController]);
```

-   Compiler Options - tsconfig.json

```json
"experimentalDecorators": true,
"emitDecoratorMetadata": true
```

### Route

```cmd
npm install path-to-regexp
```

```ts
// /src/pages/api/[[...params]].ts

import { createHandler, Get, Param, Post } from "@vigilio/next-api";

class UsersController {
    @Get()
    index() {
        return DB.findAllUsers();
    }

    @Get("/:id")
    public show(@Param("id") id: string) {
        return DB.findUserById(id);
    }

    @HttpCode(201)
    @Post("/")
    store(@Body() body: { name: string; lastname: string }) {
        return DB.create(body);
    }

    @HttpCode(201)
    @Put("/")
    update(
        @Param("id") id: string,
        @Body() body: { name: string; lastname: string }
    ) {
        return DB.updateById(id, body);
    }

    @Delete("/")
    destroy(@Param("id") id: string) {
        return DB.destroy(id);
    }
}

export default createHandler([UsersController,...morecontrollers], true); //true you dont need create directories because will be a dynamic automatically params. false will need directories and files to read params @default false
```

### Validators and Pipes

Using @vigilio/valibot to validate

```cmd
npm add @vigilio/valibot
```

Docs @vigilio/valibot
https://www.npmjs.com/package/@vigilio/valibot

```ts
// src/users/schema.ts - you can custom your file name
import {
    array,
    Input,
    literal,
    number,
    objectAsync,
    string,
    union,
    maxLength,
    minLength,
    boolean,
    email,
    maxValue,
    minValue,
    object,
    nullable,
} from "@vigilio/valibot";

export const usersSchema = objectAsync({
    id: number(),
    name: string([minLength(3), maxLength(10)]),
    email: string([email()]),
    age: number([minValue(18), maxValue(120)]),
    role: union([literal("admin"), literal("client")]), // enum : admin|client
    enabled: boolean(),
    hobbies: array(string()),
    address: nullable(object({ zip: string(), code: string() })), // can be a nullable
});
// you can use omit,merge,pick,etc from valibot
export const usersStoreDto = omitAsync(usersSchema, ["id"]);
export type UsersStoreDto = Input<typeof usersStoreDto>;

export const usersUpdateDto = omitAsync(usersSchema, ["id"]);
export type UsersUpdateDto = Input<typeof usersUpdateDto>;
```

```ts
export class UsersController {
    @HttpCode(201)
    @Validator(usersStoreDto) //body validation
    @Post("/users")
    async store(@Body() body: UsersStoreDto) {}

    @HttpCode(201)
    @Validator(usersUpdateDto)
    @Pipe(objectAsync({ id: string() })) //param validation
    @Put("/users/:id")
    async update(@Body() body: UsersUpdateDto, @Param("id") id: string) {}
}
```

### Injectable and Handle Errors

```ts
import { BadRequestException, NotFoundException } from "@vigilio/next-api";

export class UsersService {
    async index() {
        const data = await Users.findAll();
        return { success: true, data };
    }

    async show(id: string) {
        const user = await Users.findByPk(id);
        if (!user) {
            // handle error
            throw new NotFoundException(`No se encontró un usuario ${id}`);
        }
        return { success: true, user };
    }

    async store(body: UsersStoreDto) {
        const user = await Users.create(body);
        return { success: true, user };
    }

    async update(id: string, body: UsersUpdateDto) {
        const { user } = await this.show(id);
        await user.update(body);
        return { success: true, user };
    }
    async destroy(id: string) {
        const { user } = await this.show(id);
        return { success: true, message: "remvoe succelly" };
    }
}

@Injectable()
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
	@Get("/users")
	async index() {
		const result = await this.usersService.index(); //you can use
		return result;
	}
    ....
}
```

| Exception                      | Status Code | Default Message         |
| ------------------------------ | ----------- | ----------------------- |
| `BadRequestException`          | 400         | 'Bad Request'           |
| `UnauthorizedException`        | 401         | 'Unauthorized'          |
| `ForbiddenException`           | 403         | 'Forbidden'             |
| `NotFoundException`            | 404         | 'Not Found'             |
| `ConflictException`            | 409         | 'Conflict'              |
| `PayloadTooLargeException`     | 413         | 'Payload Too Large'     |
| `UnprocessableEntityException` | 422         | 'Unprocessable Entity'  |
| `InternalServerErrorException` | 500         | 'Internal Server Error' |

### Custom Middleware

```ts
import {
    createMiddlewareDecorator,
    UnauthorizedException,
    UnauthorizedException,
} from "@vigilio/next-api";

const JwtAuthGuard = createMiddlewareDecorator(
    (req: NextApiRequest, res: NextApiResponse, next: NextFunction) => {
        if (!validateJwt(req)) {
            throw new UnauthorizedException();
            // or
            return next(new UnauthorizedException());
        }

        next();
    }
);

class SecureHandler {
    @Get()
    @JwtAuthGuard() //use middleware
    public securedData(): string {
        return "Secret data";
    }
}
```

### Custom Decorator

```ts
import { createParamDecorator } from "@vigilio/next-api";

export const UserAgent = createParamDecorator<string | undefined>(
    (req) => req.headers["user-agent"]
);
class CommentHandler {
    @Get()
    public comments(@UserAgent() userAgent?: string) {
        return `Someone requested the comments via "${
            userAgent ?? "Unknown browser"
        }"`;
    }
}
```

<!-- custom upload formidable decorator -->

```cmd
npm install formidable
```

```ts
import { NextApiRequest, NextApiResponse } from "next";
import {
    createMiddlewareDecorator,
    NextFunction,
} from "./middleware.decorators";
import formidable, { type File } from "formidable";

export const Upload = () =>
    createMiddlewareDecorator(
        async (
            req: NextApiRequest,
            res: NextApiResponse,
            next: NextFunction
        ) => {
            const form = formidable();

            try {
                const [fields, files] = await form.parse(req);
                const archivos = files.file;
                req.files = archivos;
                if (fields.name) {
                    req.filesName = fields.name[0];
                }
                next();
            } catch (error) {
                return res.status(500).json({
                    success: false,
                    message: "Error ",
                });
            }
        }
    )(); //()

export class UploadsController {
    @Upload()
    @Post("/:entity/:property")
    async store(@Body() body: { files: string; filesName: string }) {
        console.log({ body });
        return result;
    }
}
```
