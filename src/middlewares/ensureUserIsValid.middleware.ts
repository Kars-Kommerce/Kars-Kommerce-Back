import { NextFunction, Request, Response } from "express";
import { prisma } from "../app";
import AppError from "../errors";

const ensureUserIsValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, cpf, cellphone } = req.body;

  const userByAllAttrs = await prisma.user.findFirst({
    where: { email, cpf, cellphone },
  });

  if (userByAllAttrs)
    throw new AppError("Email, CPF and Cellphone already in use", 409);

  const userByEmail = await prisma.user.findUnique({ where: { email } });

  if (userByEmail) throw new AppError("Email already recorded", 409);

  const userByCpf = await prisma.user.findUnique({ where: { cpf } });

  if (userByCpf) throw new AppError("CPF already recorded", 409);

  const userByCellphone = await prisma.user.findUnique({
    where: { cellphone },
  });

  if (userByCellphone) throw new AppError("Cellphone already recorded", 409);

  return next();
};

export default ensureUserIsValidMiddleware;
