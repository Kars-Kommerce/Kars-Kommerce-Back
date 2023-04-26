import { NextFunction, Request, Response } from "express";
import { prisma } from "../app";
import AppError from "../errors";

const isAddressOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const addressId = parseInt(req.params.id);
  const address = await prisma.address.findUnique({
    where: {
      id: addressId,
    },
  });

  if (!address) {
    throw new AppError("Address not found", 404);
  }

  if (address.userId !== req.user.id) {
    throw new AppError("You are not Address Author", 401);
  }
  return next();
};

export default isAddressOwnerMiddleware;
