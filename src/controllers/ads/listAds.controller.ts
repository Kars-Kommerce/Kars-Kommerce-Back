import { Request, Response } from "express-serve-static-core";
import listAdsService from "../../services/ads/listAds.service";


const listAdsController = async (req: Request, res: Response) => {

  const ads = await listAdsService();

  return res.status(200).json(ads);
};

export default listAdsController;
