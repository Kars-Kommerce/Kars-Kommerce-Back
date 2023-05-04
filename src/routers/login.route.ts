import { Router } from "express";
import { validateSchemasMiddleware } from "../middlewares";
import loginController from "../controllers/login";
import loginSchema from "../schemas/login.schema";

const loginRoute = Router();

loginRoute.post(
  "",
  validateSchemasMiddleware(loginSchema),
  loginController
);

export default loginRoute;
