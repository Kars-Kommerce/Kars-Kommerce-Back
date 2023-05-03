import { prisma } from "../../app";
import { sendEmail } from "../../utils/emailSender.utils";

const createResetPasswordService = async (
  email: string,
  token: string,
  userId: string | undefined
): Promise<void> => {
  const passwordResetExists = await prisma.passwordResetRequest.findUnique({
    where: { userId: userId },
  });
  if (passwordResetExists) {
    await prisma.passwordResetRequest.delete({
      where: { userId: userId },
    });
  }
  const passwordResetRequest = await prisma.passwordResetRequest.create({
    data: {
      token: token,
      userId: userId as string,
    },
  });
  sendEmail(passwordResetRequest.token, email);

  return;
};

export default createResetPasswordService;
