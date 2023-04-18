import { prisma } from "../../app";

const listAdsService = async (page = 1, pageSize = 12) => {
  const offset = (page - 1) * pageSize;

  const ads = await prisma.advertisement.findMany({
    skip: offset,
    take: pageSize,
    orderBy: {
      created_at: "asc",
    },
  });

  const totalAds = await prisma.advertisement.count();

  const pageCount = Math.ceil(totalAds / pageSize);

  return {
    data: ads,
    page,
    pageCount,
    total: totalAds,
  };
};

export default listAdsService;
