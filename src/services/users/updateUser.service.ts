import { PrismaClientKnownRequestError } from "../../errors";
import { prisma } from "../../app";
import { IUserUpdateRequestProps } from "../../interfaces/user.interfaces";
import { updateUserRequestSchama } from "../../schemas/user.schemas";
import AppError from "../../errors";

const updateUserService = async (
  payload: IUserUpdateRequestProps,
  id: string
) => {
  try {
    const user = await prisma.user.update({
      where: { id },
      data: { ...payload },
    });

    const parsedData = updateUserRequestSchama.parseAsync(user);

    return parsedData;
  } catch (err: unknown) {
    if (err instanceof PrismaClientKnownRequestError && err.code === "P2025") {
      throw new AppError("User Not Found", 404);
    }

    throw err;
  }
};

export default updateUserService;
