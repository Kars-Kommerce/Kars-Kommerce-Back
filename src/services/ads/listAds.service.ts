import { prisma } from "../../app";
import { retrieveAdvertisementsSchema } from "../../schemas/ads.schema";

const listAdsService = async (page = 1, pageSize = 12) => {
  const offset = (page - 1) * pageSize;

  const ads = await prisma.advertisement.findMany({
    skip: offset,
    take: pageSize,
    orderBy: {
      created_at: "asc",
    },
    include: {
      author: {
        select: { id: true, name: true, bio: true, is_advertiser: true },
      },
    },
  });

  const totalAds = await prisma.advertisement.count();

  const pageCount = Math.ceil(totalAds / pageSize);

  return {
    data: retrieveAdvertisementsSchema.parse(ads),
    page,
    pageCount,
    total: totalAds,
  };
};

export default listAdsService;
