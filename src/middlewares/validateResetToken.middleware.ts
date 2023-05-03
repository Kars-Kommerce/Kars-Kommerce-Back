import { NextFunction, Request, Response } from "express";
import jwt, { JsonWebTokenError, JwtPayload } from "jsonwebtoken";
import AppError from "../errors";

const validateTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorization = req.params.token;

  if (!authorization) throw new AppError("Missing authorization headers", 401);

  return jwt.verify(authorization, process.env.RESET_KEY!, (err, decoded) => {
    if (err) return;

    if (typeof decoded === "string") return;

    return next();
  });
};

export default validateTokenMiddleware;
