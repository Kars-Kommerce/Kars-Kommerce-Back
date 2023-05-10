import { NextFunction, Request, Response } from "express";
import jwt, { JsonWebTokenError, JwtPayload } from "jsonwebtoken";
import crypto from "crypto";

const RESET_KEY = "process.env.RESET_KEY";

const createResetTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const emailForHash = req.body.email + Date.now();

  const tokenEncoded = crypto
    .createHash("md5")
    .update(emailForHash)
    .digest("hex");

  req.token = tokenEncoded;

  return next();
};

export default createResetTokenMiddleware;
