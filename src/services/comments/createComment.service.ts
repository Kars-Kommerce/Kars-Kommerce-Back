import { prisma } from "../../app";
import AppError from "../../errors";

const createCommentService = async (
  payload: string,
  adId:number,
  userId: string
): Promise<object> => {

  const newComment = await prisma.comment.create({
    data: {
      text: payload,
      author: {
        connect: { id: userId } 
      },
      advertisement: {
        connect: { id: adId } 
      }
    }
  })
  



  return  newComment;
};

export default createCommentService;
