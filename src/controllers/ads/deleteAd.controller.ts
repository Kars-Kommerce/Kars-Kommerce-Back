import { Request, Response } from "express-serve-static-core";
import deleteAdService from "../../services/ads/deleteAd.service";


const deleteAdController = async (req: Request, res: Response) => {
  const adId = Number(req.params.id); 
  const deleteAd = await deleteAdService(adId);

  return res.status(200).json();
};

export default deleteAdController;
