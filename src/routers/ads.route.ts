import { Router } from "express";
import { validateSchemasMiddleware, validateTokenMiddleware } from "../middlewares";
import createAdvertisementRequestSchema, { updateAdvertisementRequestSchema } from "../schemas/ads.schema";
import createAdController from "../controllers/ads/createAd.controller";
import listAdsController from "../controllers/ads/listAds.controller";
import updateAdController from "../controllers/ads/updateAd.controller";
import deleteAdController from "../controllers/ads/deleteAd.controller";
import isAdOwnerMiddleware from "../middlewares/isAdOwner.middleware";




const adsRoutes = Router();

adsRoutes.post(
  "",
  validateTokenMiddleware,
  validateSchemasMiddleware(createAdvertisementRequestSchema),
  createAdController,
);

adsRoutes.get(
  "",
  listAdsController
);

adsRoutes.patch(
  "/:id",
  validateTokenMiddleware,
  isAdOwnerMiddleware,
  validateSchemasMiddleware(updateAdvertisementRequestSchema),
  updateAdController,
);

adsRoutes.delete(
  "/:id",
  validateTokenMiddleware,
  isAdOwnerMiddleware,
  deleteAdController
);
export default adsRoutes;
