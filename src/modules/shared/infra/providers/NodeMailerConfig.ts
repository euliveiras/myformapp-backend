import nodemailer from "nodemailer";

const getTransporter = async () => {
  const testAccount = await nodemailer.createTestAccount();
  return nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      pass: testAccount.pass,
      user: testAccount.user,
    },
  });
};

export default getTransporter;
