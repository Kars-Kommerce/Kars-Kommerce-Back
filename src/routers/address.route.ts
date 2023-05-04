import { Router } from "express";
import {
  validateSchemasMiddleware,
  validateTokenMiddleware,
} from "../middlewares";
import createAddressRequestSchema, {
  updateAddressRequestSchema,
} from "../schemas/address.schema";
import isAddressOwnerMiddleware from "../middlewares/isAddressOwner.middleware";
import createAddressController from "../controllers/address/createAddress.controller";
import listAddressController from "../controllers/address/listAddress.controller";
import updateAddressController from "../controllers/address/updateAddress.controller";

const addressRoutes = Router();

addressRoutes.post(
  "",
  validateTokenMiddleware,
  validateSchemasMiddleware(createAddressRequestSchema),
  createAddressController
);

addressRoutes.get("", listAddressController);

addressRoutes.patch(
  "/:id",
  validateTokenMiddleware,
  isAddressOwnerMiddleware,
  validateSchemasMiddleware(updateAddressRequestSchema),
  updateAddressController
);

export default addressRoutes;
