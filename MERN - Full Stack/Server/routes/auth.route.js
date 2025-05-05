const { Router } = require('express');
const controller = require("../controllers/auth.controller")

const authRouter = Router();

authRouter.post("/", controller.signup)
authRouter.get("/", controller.login)

module.exports = authRouter;