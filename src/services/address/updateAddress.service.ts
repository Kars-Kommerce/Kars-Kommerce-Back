import { prisma } from "../../app";
import {
  IAddressRequestProps,
  IAddressUpdateRequestProps,
} from "../../interfaces/address.interface";
import { createListAddressResponseSchema } from "../../schemas/address.schema";

const updateAddressService = async (
  payload: IAddressUpdateRequestProps,
  addressId: number
): Promise<IAddressRequestProps> => {
  const updatedAddress = await prisma.address.update({
    where: { id: addressId },
    data: { ...payload },
  });

  return createListAddressResponseSchema.parse(updatedAddress);
};

export default updateAddressService;
