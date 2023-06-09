import { Request, Response } from "express-serve-static-core";
import createResetPasswordService from "../../services/passwordReset/createPasswordReset.service";
import resetPasswordService from "../../services/passwordReset/passwordReset.service";
import checkTokenService from "../../services/passwordReset/checkTokenService";

const createPasswordResetRequest = async (req: Request, res: Response) => {
  const email = req.body.email;
  const user = req.info;
  const token = req.token;

  const createResetPassword = await createResetPasswordService(
    email,
    token,
    user.id
  );

  return res
    .status(200)
    .send({ token, message: "Password reset request created" });
};

async function checkToken(req: Request, res: Response) {
  const token = req.params.token;

  const checkToken = await checkTokenService(token);

  return res.status(200).send(checkToken);
}

async function resetPassword(req: Request, res: Response) {
  const password = req.body.password;
  const token = req.params.token;

  const ResetPassword = await resetPasswordService(password, token);

  return res.send({ success: true, message: "Password reset successfully!" });
}

export { resetPassword, checkToken, createPasswordResetRequest };
