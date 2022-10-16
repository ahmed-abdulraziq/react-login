const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = "789761777249-p8fajjh0du7kqek22r6h9vhqbfmgoggh.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "77ad0420069538c60d04";
const GITHUB_CLIENT_SECRET = "3190fb04d2c5d06fd99144453b3cb1c5eed5134a";

const FACEBOOK_APP_ID = "479893210776103";
const FACEBOOK_APP_SECRET = "19835fa27da65ae5ccb74cb2b900e61d";

passport.use(
    new GoogleStrategy(
        {
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
        },
        (accessToken, refreshToken, profile, done) => {
            done(null, profile);
        }
    )
);

passport.use(
    new GithubStrategy(
        {
            clientID: GITHUB_CLIENT_ID,
            clientSecret: GITHUB_CLIENT_SECRET,
            callbackURL: "/auth/github/callback",
        },
        (accessToken, refreshToken, profile, done) => {
            done(null, profile);
        }
    )
);

passport.use(
    new FacebookStrategy(
        {
            clientID: FACEBOOK_APP_ID,
            clientSecret: FACEBOOK_APP_SECRET,
            callbackURL: "/auth/facebook/callback",
        },
        (accessToken, refreshToken, profile, done) => {
            done(null, profile);
        }
    )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));