import { compareSync } from "bcryptjs";
import { prisma } from "../../app";
import ILoginProps from "../../interfaces/login.interface";
import jwt from "jsonwebtoken";
import AppError from "../../errors";

const loginService = async ({ email, password }: ILoginProps) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!user) throw new AppError("User not found", 404);

  const compare = compareSync(password, user.password);

  if (!compare) throw new AppError("User not found", 409);

  const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY!, {
    expiresIn: "1h",
    subject: user.id,
  });

  return `Bearer ${token}`;
};

export default loginService;
