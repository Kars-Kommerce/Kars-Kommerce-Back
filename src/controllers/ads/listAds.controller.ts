import { Request, Response } from "express-serve-static-core";
import listAdsService from "../../services/ads/listAds.service";

const listAdsController = async (req: Request, res: Response) => {
  let { page, pageSize, ...where } = req.query;
  if (!page) {
    page = "1";
  }
  if (!pageSize) {
    pageSize = "12";
  }

  const ads = await listAdsService(Number(page), Number(pageSize), where);

  return res.status(200).json(ads);
};

export default listAdsController;
