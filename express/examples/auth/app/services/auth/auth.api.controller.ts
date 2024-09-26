import { Controller, Post, Req } from "@decorators/express";
import { NextFunction, Request, Response } from "express";
import passport from "passport";

@Controller("/auth")
export class AuthApiController {
    @Post("/login", [
        (req: Request, res: Response, next: NextFunction) => {
            passport.authenticate(
                "local",
                (err: Error, user: { id: string }, info: string) => {
                    if (err) {
                        return next(err);
                    }
                    if (!user) {
                        return res.status(401).json(info);
                    }

                    req.logIn(user, (err) => {
                        if (err) {
                            return next(err);
                        }
                        return res.status(201).json({
                            success: true,
                            page: "/dashboard",
                        });
                    });
                }
            )(req, res, next);
        },
    ])
    login() {}
}
