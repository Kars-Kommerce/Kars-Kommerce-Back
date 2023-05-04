import { NextFunction, Request, Response } from "express";
import { prisma } from "../app";
import AppError from "../errors";

const advertsmentExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
   const  adId = Number(req.params.id);
   const adExists = await prisma.advertisement.findUnique({
    where:{id: adId}
   });  
 
  return next();
};

export default advertsmentExistsMiddleware;
