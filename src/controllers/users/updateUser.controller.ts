import { Request, Response } from "express";
import { updateUserService } from "../../services/users";

const updateUserController = async (req: Request, res: Response) => {
  const updatedUser = await updateUserService(req.body, req.user.id as string);

  return res.status(200).json(updatedUser);
};

export default updateUserController;
