import { Injectable } from "@decorators/di";
import { Controller, Get, Res, Req } from "@decorators/express";
import { Response, Request } from "express";
import { UserEntity } from "@/user/entities/user.entity";

@Injectable()
@Controller("/")
export class WebController {
    @Get("/")
    async home(@Res() res: Response) {
        const users = await UserEntity.findAll();
        return res.render("index", { users });
    }
    @Get("/dashboard")
    async dashboard(@Res() res: Response, @Req() req: Request) {
        if (req.isAuthenticated()) {
            return res.render("admin/index", { user: req.user });
        } else {
            return res.redirect("/auth/login");
        }
    }
}
