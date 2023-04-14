import { prisma } from "../../app";
import { IAdvertisementUpdateRequestProps, IAdvertisementResponseProps } from "../../interfaces/ads.interface";
import { createListAdvertisementResponseSchema } from "../../schemas/ads.schema";

const updateAdService = async (payload: IAdvertisementUpdateRequestProps,adId:number): Promise<IAdvertisementResponseProps> => {

  const updatedAd = await prisma.advertisement.update({
    where: { id: adId },
    data: { ...payload },
  });

  return createListAdvertisementResponseSchema.parse(updatedAd);
};

export default updateAdService;
