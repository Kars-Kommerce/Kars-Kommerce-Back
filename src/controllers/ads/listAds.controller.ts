import { Request, Response } from "express-serve-static-core";
import listAdsService from "../../services/ads/listAds.service";

const listAdsController = async (req: Request, res: Response) => {
  const page = Number(req.query.page) || 1;

  const ads = await listAdsService(page, 12);

  return res.status(200).json(ads);
};

export default listAdsController;
