import { Request, Response } from "express-serve-static-core";
import updateAdService from "../../services/ads/updateAd.service";


const updateAdController = async (req: Request, res: Response) => {
  const adId = Number(req.params.id); 
  const updatedAd = await updateAdService(req.body,adId);

  return res.status(200).json(updatedAd);
};

export default updateAdController;
