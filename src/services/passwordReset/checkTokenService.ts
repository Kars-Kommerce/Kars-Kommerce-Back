import { prisma } from "../../app";
import AppError from "../../errors";

const checkTokenService = async (token: string): Promise<{}> => {
  const checkToken = await prisma.passwordResetRequest.findUnique({
    where: { token: token },
  });

  if (!checkToken) {
    throw new AppError("Invalid token", 404);
  }
  return { isValid: true };
};

export default checkTokenService;
