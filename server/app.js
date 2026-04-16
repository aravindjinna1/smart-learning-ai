const express = require("express");
const app = express();
const authMiddleware = require('./Routes/jwt')
const signupRoute = require("./Routes/Signup");
const signinRoute = require("./Routes/Signin");
// const sendEmail = require('./Routes/sendOtp')
const askai = require("./Routes/askai");


// const forgotPassword = require('./Routes')

// const cors = require("cors");

// askai.use(
//   cors({
//     origin: [
//       "https://smart-learning-ai-green.vercel.app",
//       "http://localhost:3000",
//     ],
//     methods: ["GET", "POST"],
//   }),
// );

const authRoutes = require("./Routes/sendEmail");


const { forgotPassword, resetPassword } = require("./controllers/authControllers");

app.use("/auth", require("./Routes/passwordRoute"));

// app.use("/auth", authRoutes);
app.use("/app", signupRoute);
app.use("/app/si", signinRoute);
// app.use("/app/otp", );

// app.post("/auth/forgot-password", forgotPassword);
// app.post("/reset-password", resetPassword);

// console.log("app//otp",sendEmail)

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use("/app/ai", askai);
console.log(authMiddleware)
// authMiddleware
module.exports = app;
