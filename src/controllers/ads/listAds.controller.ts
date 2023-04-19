import { Request, Response } from "express-serve-static-core";
import listAdsService from "../../services/ads/listAds.service";

const listAdsController = async (req: Request, res: Response) => {
  const page = Number(req.query.page) || 1;
  const pageSize = Number(req.query.pageSize) || 12;

  const ads = await listAdsService(page, pageSize);

  return res.status(200).json(ads);
};

export default listAdsController;
