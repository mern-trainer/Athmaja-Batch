const { Router } = require('express');
const controller = require("../controllers/auth.controller");
const Auth = require('../middlewares/Auth');

const authRouter = Router();

authRouter.post("/", controller.signup)
authRouter.get("/", controller.login)
authRouter.get("/check", Auth, controller.checkUser)

module.exports = authRouter;