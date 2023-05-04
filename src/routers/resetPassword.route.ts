import express from "express";
import {
  checkToken,
  createPasswordResetRequest,
  resetPassword,
} from "../controllers/passwordReset/passwordReset.controller";
import ensureUserExistisMiddleware from "../middlewares/ensureUserExistis.middleware";
import createResetTokenMiddleware from "../middlewares/createResetToken.middleware";

const passwordRoutes = express.Router();

passwordRoutes.post(
  "",
  createResetTokenMiddleware,
  ensureUserExistisMiddleware,
  createPasswordResetRequest
);
passwordRoutes.get("/:token", checkToken);
passwordRoutes.put("/:token", resetPassword);

export default passwordRoutes;
