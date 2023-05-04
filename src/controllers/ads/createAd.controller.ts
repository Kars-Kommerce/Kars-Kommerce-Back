import { Request, Response } from "express-serve-static-core";
import createAdService from "../../services/ads/createAd.service";

const createAdController = async (req: Request, res: Response) => {
  const {galery, ...payload} = req.body
  const userId = req.user.id;
  const newAd = await createAdService(payload,galery, userId);

  return res.status(201).json(newAd);
};

export default createAdController;
