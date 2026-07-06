import nodemailer from "nodemailer";

export const emailTransporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST ?? "smtp.example.com",
  port: Number(process.env.EMAIL_PORT ?? 587),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER ?? "",
    pass: process.env.EMAIL_PASS ?? ""
  }
});
