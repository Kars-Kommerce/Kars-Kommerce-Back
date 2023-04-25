import { Router } from "express";
import {
  validateSchemasMiddleware,
  validateTokenMiddleware,
} from "../middlewares";
import createAdressRequestSchema, {
  updateAdressRequestSchema,
} from "../schemas/adress.schema";

const adressRoutes = Router();

adressRoutes.post(
  "",
  validateTokenMiddleware,
  validateSchemasMiddleware(createAdressRequestSchema)
);

adressRoutes.get("", listAdsController);

adressRoutes.patch(
  "/:id",
  validateTokenMiddleware,
  isAdOwnerMiddleware,
  validateSchemasMiddleware(updateAdressRequestSchema),
  updateAdController
);

adressRoutes.delete(
  "/:id",
  validateTokenMiddleware,
  isAdOwnerMiddleware,
  deleteAdController
);
export default adressRoutes;
