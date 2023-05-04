import { NextFunction, Response, Request } from "express";
import { prisma } from "../app";
import AppError from "../errors";
import { User } from "@prisma/client";

declare global {
  namespace Express {
    interface Request {
      info: User;
    }
  }
}

const ensureUserExistisMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  req.info = user;

  return next();
};

export default ensureUserExistisMiddleware;
