import { Request, Response } from "express";
import { deleteUserService } from "../../services/users";

const deleteUserController = async (req: Request, res: Response) => {
  await deleteUserService(req.user.id as string);

  return res.status(204).send();
};

export default deleteUserController;
