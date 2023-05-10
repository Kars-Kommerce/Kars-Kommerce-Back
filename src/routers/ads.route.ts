import { Router } from "express";

import {
  validateSchemasMiddleware,
  validateTokenMiddleware,
} from "../middlewares";
import createAdvertisementRequestSchema, { commentRequestSchema, updateAdvertisementRequestSchema } from "../schemas/ads.schema";

import createAdController from "../controllers/ads/createAd.controller";
import listAdsController from "../controllers/ads/listAds.controller";
import updateAdController from "../controllers/ads/updateAd.controller";
import deleteAdController from "../controllers/ads/deleteAd.controller";
import isAdOwnerMiddleware from "../middlewares/isAdOwner.middleware";

import listUniqueAdsController from "../controllers/ads/listUniqueAds.controller";

import advertsmentExistsMiddleware from "../middlewares/advertsmentExists.middleware";
import createCommentController from "../controllers/comments/createComment.controller";


const adsRoutes = Router();

adsRoutes.post(
  "",
  validateTokenMiddleware,
  validateSchemasMiddleware(createAdvertisementRequestSchema),
  createAdController
);

adsRoutes.get("", listAdsController);

adsRoutes.get("/:id", listUniqueAdsController);

adsRoutes.patch(
  "/:id",
  validateTokenMiddleware,
  isAdOwnerMiddleware,
  validateSchemasMiddleware(updateAdvertisementRequestSchema),
  updateAdController
);

adsRoutes.delete(
  "/:id",
  validateTokenMiddleware,
  isAdOwnerMiddleware,
  deleteAdController
);

adsRoutes.post(
  "/:id/comment",
  validateTokenMiddleware,
  validateSchemasMiddleware(commentRequestSchema),
  advertsmentExistsMiddleware,
  createCommentController
);
export default adsRoutes;
