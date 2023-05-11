import { prisma } from "../../app";
import { retrieveAdvertisementsSchema } from "../../schemas/ads.schema";

const listAdsService = async (page = 1, pageSize = 12, where: any) => {
  const offset = (page - 1) * pageSize;
  const ads = await prisma.advertisement.findMany({
    skip: offset,
    take: pageSize,
    where,
    orderBy: {
      created_at: "asc",
    },
    include: {
      author: {
        select: { id: true, name: true, bio: true, is_advertiser: true },
      },
      comments: {
        select: {
          id: true,
          text: true,
          author: { select: { id: true, name: true } },
          created_at: true,
        },
      },
      galery: { select: { image: true } },
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
