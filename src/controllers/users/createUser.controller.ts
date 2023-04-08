import { Request, Response } from "express-serve-static-core";
import { createUserService } from "../../services/users";

const createUserController = async (req: Request, res: Response) => {
  const newUser = await createUserService(req.body);

  return res.status(201).json(newUser);
};

export default createUserController;
