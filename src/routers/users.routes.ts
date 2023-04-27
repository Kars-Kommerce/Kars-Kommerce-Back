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
import retrieveUniqueUserController from "../controllers/users/retrieveUniqueUser.controller";
import ensureUUIDIsValidMiddleware from "../middlewares/ensureUUIDIsValid.middleware";

const usersRoutes = Router();

usersRoutes.get("", retrieveUsersController);
usersRoutes.get(
  "/profile",
  validateTokenMiddleware,
  retrieveUniqueUserController
);
usersRoutes.get(
  "/:id",
  ensureUUIDIsValidMiddleware,
  retrieveUniqueUserController
);
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
