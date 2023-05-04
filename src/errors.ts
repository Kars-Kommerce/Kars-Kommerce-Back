import { NextFunction, Request, Response } from "express";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export default class AppError extends Error {
  public statusCode;

  constructor(message: string, statusCode: number) {
    super();

    this.message = message;
    this.statusCode = statusCode;
  }
}

export const errorHandler = async (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  console.log(err);
  return res.status(500).json({ message: "Internal server error." });
};

export { PrismaClientKnownRequestError };
