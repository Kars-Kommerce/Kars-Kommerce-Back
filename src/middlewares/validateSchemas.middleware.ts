import { NextFunction, Request, Response } from "express";
import { Schema, z } from "zod";

const validateSchemasMiddleware =
  (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body);

      return next();
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ errors: err.flatten().fieldErrors });
      }
    }
  };

export default validateSchemasMiddleware;
