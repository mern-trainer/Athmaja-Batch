const { Router } = require("express");
const controller = require("../controllers/jwt.controller");

const jwtRouter = Router();

jwtRouter.post("/", controller.createJwt)
jwtRouter.get("/", controller.verifyJwt)

module.exports = jwtRouter;