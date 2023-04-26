import { Request, Response } from "express-serve-static-core";
import updateAddressService from "../../services/address/updateAddress.service";

const updateAddressController = async (req: Request, res: Response) => {
  const addressId = Number(req.params.id);
  const updatedAd = await updateAddressService(req.body, addressId);

  return res.status(200).json(updatedAd);
};

export default updateAddressController;
