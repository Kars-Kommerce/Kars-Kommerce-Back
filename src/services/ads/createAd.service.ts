import { prisma } from "../../app";
import AppError from "../../errors";
import {
  IAdvertisementRequestProps,
  IAdvertisementResponseProps,
} from "../../interfaces/ads.interface";
import { createListAdvertisementResponseSchema } from "../../schemas/ads.schema";

const createAdService = async (
  payload: IAdvertisementRequestProps,
  galery:string[],
  userId: string
): Promise<IAdvertisementResponseProps> => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user?.is_advertiser) {
    console.log(user)
    throw new AppError("You not have permission for create advertisement", 409);
  }
  if (galery.length > 6) {
    throw new AppError("galery have more than 6 images", 400);
  }

  const newAd = await prisma.advertisement.create({
    data: { ...payload, authorId: userId as string },
    include: {
      author: {
        select: { id: true, name: true, bio: true, is_advertiser: true },
      },comments:{
        select: { id: true,text:true,
        author:{select:{id:true,name:true}},
        created_at:true }
      },
      galery: {select: { image: true}}
      
    },
  });

  galery.forEach( async (image) => {
    await prisma.galery.create({data:{image: image, advertisementId: newAd.id}})
  })


  return createListAdvertisementResponseSchema.parse(newAd);
};

export default createAdService;
