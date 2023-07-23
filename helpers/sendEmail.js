const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_USER, META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: META_USER,
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = {
    ...data,
    from: META_USER,
  };

  transport
    .sendMail(email)
    .then(() => console.log("Email sent successfully"))
    .catch((error) => console.log("Email send error: \n", error));
};

module.exports = sendEmail;
