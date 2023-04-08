import { IUserRequestProps } from "../../interfaces/user.interfaces";
import { prisma } from "../../app";
import { hashSync } from "bcryptjs";
import { createListUserResponseSchema } from "../../schemas/user.schemas";

const createUserService = async (payload: IUserRequestProps) => {
  const newUser = await prisma.user.create({
    data: { ...payload, password: hashSync(payload.password, 12) },
  });

  return createListUserResponseSchema.parse(newUser);
};

export default createUserService;
