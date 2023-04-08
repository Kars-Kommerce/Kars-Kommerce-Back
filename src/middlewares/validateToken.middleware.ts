import { NextFunction, Request, Response } from "express";
import jwt, { JsonWebTokenError, JwtPayload } from "jsonwebtoken";
import AppError from "../errors";

const validateTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  if (!authorization) throw new AppError("Missing authorization headers", 401);

  const token = authorization.split(" ");

  return jwt.verify(token[1], process.env.SECRET_KEY!, (err, decoded) => {
    if (err) return;

    if (typeof decoded === "string") return;

    req.user = {
      id: decoded!.sub as string,
      email: decoded!.email as string,
    };

    return next();
  });
};

export default validateTokenMiddleware;
