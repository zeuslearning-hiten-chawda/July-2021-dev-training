/** @format */

import Express from "express";
import LoginController from "../controllers/login.controller";

const LoginRoute = Express.Router();
LoginRoute.post("/", LoginController.validateUser);

export default LoginRoute;
