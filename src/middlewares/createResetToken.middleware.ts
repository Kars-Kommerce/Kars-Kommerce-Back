import { NextFunction, Request, Response } from "express";
import jwt, { JsonWebTokenError, JwtPayload } from "jsonwebtoken";

const RESET_KEY = "process.env.RESET_KEY";

const createResetTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = jwt.sign({ email: req.body }, RESET_KEY!, {
    expiresIn: "5m",
  });

  req.token = token;

  return next();
};

export default createResetTokenMiddleware;
