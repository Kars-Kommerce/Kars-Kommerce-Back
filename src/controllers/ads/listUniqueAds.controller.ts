import { Request, Response } from "express-serve-static-core";
import listUniqueAdsService from "../../services/ads/listUniqueAds.service";

const listUniqueAdsController = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const ads = await listUniqueAdsService(id);

  return res.status(200).json(ads);
};

export default listUniqueAdsController;
