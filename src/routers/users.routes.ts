import { Router } from "express";
import {
  createUserController,
  retrieveUsersController,
  updateUserController,
  deleteUserController,
} from "../controllers/users";
import {
  ensureUserIsValidMiddleware,
  validateSchemasMiddleware,
  validateTokenMiddleware,
} from "../middlewares";
import createUserRequestSchema, {
  updateUserRequestSchama,
} from "../schemas/user.schemas";

const usersRoutes = Router();

usersRoutes.get("", retrieveUsersController);
usersRoutes.post(
  "",
  validateSchemasMiddleware(createUserRequestSchema),
  ensureUserIsValidMiddleware,
  createUserController
);
usersRoutes.patch(
  "/profile",
  validateTokenMiddleware,
  validateSchemasMiddleware(updateUserRequestSchama),
  updateUserController
);
usersRoutes.delete("/profile", validateTokenMiddleware, deleteUserController);

export default usersRoutes;
