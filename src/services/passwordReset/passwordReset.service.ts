import { prisma } from "../../app";
import { hashSync } from "bcryptjs";
import AppError from "../../errors";

const resetPasswordService = async (
  password: string,
  token: string
): Promise<void> => {
  const passwordReset = await prisma.passwordResetRequest.findUnique({
    where: { token },
    include: { user: true },
  });
  if (!passwordReset) throw new AppError("Invalid or expired token", 409);

  await prisma.user.update({
    where: { id: passwordReset.userId },
    data: {
      password: hashSync(password, 12),
    },
  });

  await prisma.passwordResetRequest.delete({ where: { token } });

  return;
};

export default resetPasswordService;
