import { Router } from "express";
import {
  validateSchemasMiddleware,
  validateTokenMiddleware,
} from "../middlewares";
import createAddressRequestSchema, {
  updateAddressRequestSchema,
} from "../schemas/address.schema";
import isAddressOwnerMiddleware from "../middlewares/isAddressOwner.middleware";
import createAddressController from "../controllers/address/createAddress.comtroller";

const addressRoutes = Router();

addressRoutes.post(
  "",
  validateTokenMiddleware,
  validateSchemasMiddleware(createAddressRequestSchema),
  createAddressController
);

addressRoutes.get("");

addressRoutes.patch(
  "/:id",
  validateTokenMiddleware,
  isAddressOwnerMiddleware,
  validateSchemasMiddleware(updateAddressRequestSchema)
);

addressRoutes.delete("/:id", validateTokenMiddleware, isAddressOwnerMiddleware);
export default addressRoutes;
