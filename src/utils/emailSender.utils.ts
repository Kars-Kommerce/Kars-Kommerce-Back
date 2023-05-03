import nodemailer from "nodemailer";
import AppError from "../errors";

export async function sendEmail(token: string, email: string) {
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    requireTLS: true,
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: "Password Reset Request",
    text: `To reset your password, please click on the following link: http://localhost:3001/password-reset/${token}`,
  };

  await transporter
    .sendMail(mailOptions)
    .then(() => {
      console.log("Email send with sucess");
    })
    .catch((err) => {
      console.log(err);
      throw new AppError("Error sending email, try again later", 500);
    });
}
