import { prisma } from "../../app";
import { IAdvertisementRequestProps, IAdvertisementResponseProps } from "../../interfaces/ads.interface";
import { createListAdvertisementResponseSchema } from "../../schemas/ads.schema";

const createAdService = async (payload:IAdvertisementRequestProps, userId: string|boolean): Promise<IAdvertisementResponseProps> => {

  const newAd = await prisma.advertisement.create({
    data: { ...payload, authorId: userId as string},
  });

  return createListAdvertisementResponseSchema.parse(newAd) ;
};

export default createAdService;
