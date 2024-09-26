import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as FacebookStrategy } from "passport-facebook";
import { UserEntity } from "@/user/entities/user.entity";
import { Strategy as InstagramStrategy } from "passport-instagram";
import { Strategy as LocalStrategy } from "passport-local";
import { compareSync } from "bcryptjs";

export const googleStrategy = new GoogleStrategy(
    {
        clientID:
            "406605173196-0ipr7ci4e9sme8vq4ghgc1161p6m4o3a.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "/auth/google/callback",
        scope: ["profile", "email"],
    },
    async function (_accessToken, _refreshToken, profile, done) {
        const newUser = await UserEntity.findByPk(1);
        await newUser?.update({
            foto: profile.photos ? profile.photos[0].value : "/logo.png",
        });
        return done(null, { id: 1 });
    }
);
export const facebookStrategy = new FacebookStrategy(
    {
        clientID: "807517710700277",
        clientSecret: "750deee8261d2f92316ffe351cb80a67",
        callbackURL: "/auth/facebook/callback",
        profileFields: ["id", "displayName", "photos", "email"],
    },
    async (_accessToken, _refreshToken, profile, done) => {
        const newUser = await UserEntity.findByPk(1);

        await newUser?.update({
            foto: profile.photos ? profile.photos[0].value : "/logo.png",
        });

        return done(null, {
            id: 1,
        });
    }
);
export const instagramStrategy = new InstagramStrategy(
    {
        clientID: "656095066159143",
        clientSecret: "764a78edb6a529282463eafa06cbbba4",
        callbackURL: "/auth/instagram/callback",
    },
    async (_accessToken, _refreshToken, _profile, done) => {
        return done(null, {
            id: 1,
        });
    }
);
export const localStrategy = new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
        const user = await UserEntity.findOne({
            where: {
                email: email,
            },
            raw: true,
        });
        if (!user) {
            return done(null, false, {
                message: "email incorrect",
            });
        }
        const validPassword = compareSync(password, user.password);
        if (!validPassword) {
            return done(null, false, {
                message: "password incorrect",
            });
        }
        return done(null, user);
    }
);
