import { Request, Response } from "express-serve-static-core";
import listAddressService from "../../services/address/listAdress.service";

const listAddressController = async (req: Request, res: Response) => {
  const address = await listAddressService();

  return res.status(200).json(address);
};

export default listAddressController;
