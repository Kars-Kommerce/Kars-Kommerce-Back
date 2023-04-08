import { prisma } from "../../app";
import { PrismaClientKnownRequestError } from "../../errors";
import AppError from "../../errors";

const deleteUserService = async (id: string) => {
  try {
    await prisma.user.delete({ where: { id } });
  } catch (err: unknown) {
    if (err instanceof PrismaClientKnownRequestError && err.code === "P2025") {
      throw new AppError("User not found. Verify your token informations", 404);
    }

    throw err;
  }
};

export default deleteUserService;
