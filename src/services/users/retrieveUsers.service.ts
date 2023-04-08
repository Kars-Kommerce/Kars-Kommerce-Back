import { prisma } from "../../app";
import { retrieveUsersSchema } from "../../schemas/user.schemas";

const retrieveUsersService = async () => {
  const users = await prisma.user.findMany();
  
  return retrieveUsersSchema.parse(users)
};

export default retrieveUsersService;
