import { prisma } from "../../app";

const deleteAdService = async (adId:number): Promise<void> => {

  const updatedAd = await prisma.advertisement.delete({
    where: { id: adId }
  });

  
};

export default deleteAdService;
