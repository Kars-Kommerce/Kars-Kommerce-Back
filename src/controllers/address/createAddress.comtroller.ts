import { Request, Response } from "express-serve-static-core";
import createAddressService from "../../services/address/createAddress.service";

const createAddressController = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const newAddress = await createAddressService(req.body, userId);

  return res.status(201).json(newAddress);
};

export default createAddressController;
