import { prisma } from "../../app";

const listAddressService = async () => {
  const address = await prisma.address.findMany();

  return address;
};

export default listAddressService;
