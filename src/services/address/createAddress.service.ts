import { prisma } from "../../app";
import {
  IAddressRequestProps,
  IAddressResponseProps,
} from "../../interfaces/address.interface";
import { createListAddressResponseSchema } from "../../schemas/address.schema";

const createAddressService = async (
  payload: IAddressRequestProps,
  userId: string | boolean
): Promise<IAddressResponseProps> => {
  const newAddress = await prisma.address.create({
    data: { ...payload, userId: userId as string },
  });

  return createListAddressResponseSchema.parse(newAddress);
};

export default createAddressService;
