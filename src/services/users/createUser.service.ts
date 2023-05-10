import { IUserRequestProps } from "../../interfaces/user.interfaces";
import { prisma } from "../../app";
import { hashSync } from "bcryptjs";
import { createListUserResponseSchema } from "../../schemas/user.schemas";
import AppError from "../../errors";

const createUserService = async (payload: IUserRequestProps) => {

  const {address,...user} = payload;
  const newUser = await prisma.user.create({
    data: { ...user, password: hashSync(payload.password, 12) },
    include: {
      ads: { include: { author: true } },
    },
  });
  try{
    const newAddress = await prisma.address.create({
      data: {userId:newUser.id, ...address},
    })
  }catch(err){
    await prisma.user.delete({where: { id:newUser.id}})
    throw new AppError('endereço incorreto',400)
  }

  return createListUserResponseSchema.parse(newUser);
};

export default createUserService;
