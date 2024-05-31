import { Injectable } from "@vigilio/express-core";
import { Controller, Get, Req, Res } from "@decorators/express";
import { NextFunction, Request, Response } from "express";
import { UserEntity } from "../user/entities/user.entity";
import passport from "passport";

@Injectable()
@Controller("/")
export class AuthController {
    @Get("/login")
    async login(@Res() res: Response, @Req() req: Request) {
        if (req.isAuthenticated()) {
            return res.redirect("/dashboard");
        }
        const users = await UserEntity.findAll({
            raw: true,
            limit: 5,
            attributes: ["email"],
        });

        return res.render("auth/login", { users });
    }

    @Get("/facebook", [passport.authenticate("facebook")])
    async facebook() {
        // return res.redirect("/dashboard");
    }
    @Get("/facebook/callback", [
        passport.authenticate("facebook", {
            failureRedirect: "/auth/login",
            successRedirect: "/dashboard",
        }),
    ])
    async instragramCB() {}
    @Get("/instagram/callback", [
        passport.authenticate("instagram", {
            failureRedirect: "/auth/login",
            successRedirect: "/dashboard",
        }),
    ])
    async facebookCB() {}

    @Get("/google/callback", [
        passport.authenticate("google", {
            failureRedirect: "/auth/login",
            successRedirect: "/dashboard",
        }),
    ])
    async googleCB() {}

    @Get("/register")
    async register(@Res() res: Response) {
        return res.render("auth/register");
    }
    @Get("/logout")
    async logout(
        @Req() req: Request,
        @Res() res: Response,
        next: NextFunction
    ) {
        req.logout((err) => {
            if (err) {
                return next(err);
            }
            res.redirect("/auth/login");
        });
    }
}
