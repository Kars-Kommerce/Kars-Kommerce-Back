import { NextFunction, Request, Response } from "express";
import { validate } from "uuid";
import AppError from "../errors";

const ensureUUIDIsValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.id;

  const validateUUID = validate(userId);

  if (!validateUUID) throw new AppError("User Not Found", 404);

  return next();
};

export default ensureUUIDIsValidMiddleware;
