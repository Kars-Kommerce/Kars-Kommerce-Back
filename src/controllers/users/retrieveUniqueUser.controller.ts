import { Request, Response } from "express";
import {
  retrieveUniqueUserService,
  retrieveUsersService,
} from "../../services/users";

const retrieveUniqueUserController = async (req: Request, res: Response) => {
  let userId: string = req.params.id;

  if (req.url == "/profile") {
    userId = req.user.id;
  }

  const users = await retrieveUniqueUserService(userId);

  return res.status(200).json(users);
};

export default retrieveUniqueUserController;
