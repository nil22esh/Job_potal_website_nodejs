import nodemailer from "nodemailer";

// creating transporter
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "nileshsury4940@gmail.com",
    pass: "dwmw pxet pngg rcrf",
  },
});

// mail options
const mailOptions = {
  from: "nileshsury4940@gmail.com",
  to: "",
  subject: "This mail is from Job's Portal!",
  body: "Hello User, Thanks for reaching out with us!",
};

// send an email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Email sent: " + info.response);
});
