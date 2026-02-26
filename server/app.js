const express = require("express");
const app = express.Router();

const signupRoute = require("./Routes/Signup");
const signinRoute = require("./Routes/Signin");

const askai = require("./Routes/askai");
const cors = require("cors");

askai.use(
  cors({
    origin: [
      "https://smart-learning-ai-green.vercel.app",
      "http://localhost:3000",
    ],
    methods: ["GET", "POST"],
  }),
);
app.use("/app", signupRoute);
app.use("/app", signinRoute);

app.use("/app/ai", askai);

module.exports = app;
