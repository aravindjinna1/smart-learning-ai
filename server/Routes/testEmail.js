require("dotenv").config();
const sendEmail = require("./sendEmail");

sendEmail({
  to: process.env.EMAIL_USER,
  subject: "Test Email",
  html: "<h1>Email working</h1>",
})
  .then(() => console.log("Mail sent"))
  .catch(console.error);