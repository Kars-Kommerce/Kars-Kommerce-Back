import { NextFunction, Request, Response } from "express";
import { prisma } from "../app";
import AppError from "../errors";

const isAdOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const adId = parseInt(req.params.id);
  const ad = await prisma.advertisement.findUnique({
    where: {
        id: adId
    }
  })

  if (!ad) {
    throw new AppError("Ad not found",404)
  }

  if (ad.authorId !== req.user.id){
    throw new AppError("You are not Ad Author",401)
  }
  return next();
};

export default isAdOwnerMiddleware;
