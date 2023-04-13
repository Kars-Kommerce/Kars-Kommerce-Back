import { prisma } from "../../app";

const listAdsService = async () => {
  const ads = await prisma.advertisement.findMany()

  
  return ads
};

export default listAdsService;
