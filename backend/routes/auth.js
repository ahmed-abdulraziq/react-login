const router = require("express").Router();
const passport = require("passport");

const CLIENT_URL = "http://localhost:3000/";

router.get("/login/success", (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: "successfull",
            user: req.user,
            name: req.user.username || req.user.displayName,
            photo: req.user.photos[0].value || req.user._json.picture
        });
    }
});

router.get("/login/failed", (req, res) => {
    if (req.user) {
        res.status(401).json({
            success: false,
            message: "failure",
        });
    }
});

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect(CLIENT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));
router.get("/google/callback", passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
}));

router.get("/github", passport.authenticate("github", { scope: ["profile"] }));
router.get("/github/callback", passport.authenticate("github", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
}));

router.get("/facebook", passport.authenticate("facebook", { scope: ["profile"] }));
router.get("/facebook/callback", passport.authenticate("facebook", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
}));

module.exports = router