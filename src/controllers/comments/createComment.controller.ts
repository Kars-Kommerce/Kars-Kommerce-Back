import { Request, Response } from "express-serve-static-core";
import createCommentService from "../../services/comments/createComment.service";


const createCommentController = async (req: Request, res: Response) => {
  const userId = req.user.id;
  const adId = Number(req.params.id)
  const newAd = await createCommentService(req.body.text,adId, userId);

  return res.status(201).json(newAd);
};

export default createCommentController;
