import { Request, Response } from "express";
import { retrieveUsersService } from "../../services/users";

const retrieveUsersController = async (req: Request, res: Response) => {
  const users = await retrieveUsersService();

  return res.status(200).json(users);
};

export default retrieveUsersController;
