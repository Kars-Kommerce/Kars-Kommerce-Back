import { prisma } from "../../app";
import AppError from "../../errors";

const listUniqueAdsService = async (findId: number) => {
  const ads = await prisma.advertisement.findUnique({
    where: {
      id: findId,
    },
    include: {
      author: {
        select: { id: true, name: true, bio: true, is_advertiser: true },
      },
    },
  });
  if (!ads) {
    throw new AppError("Ads not found", 404);
  }

  return ads;
};

export default listUniqueAdsService;
