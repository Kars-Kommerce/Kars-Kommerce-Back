import { prisma } from "../../app";
import { createListUserResponseSchema } from "../../schemas/user.schemas";

const retrieveUniqueUserService = async (userId: string) => {
  const users = await prisma.user.findUniqueOrThrow({
    where: {
      id: userId,
    },
    include: {
      ads: true,
    },
  });

  return createListUserResponseSchema.parse(users);
};

export default retrieveUniqueUserService;
