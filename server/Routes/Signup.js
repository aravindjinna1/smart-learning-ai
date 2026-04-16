const express = require("express");
const bcrypt = require("bcrypt");
const signup = express.Router();
const jwt = require("jsonwebtoken");
const SignupModel = require("../Database/Schemas/signupSchema");


signup.post("/signup", async (req, res) => {
  try {
    const { FullName, Email, Password } = req.body;


    if (!FullName || !Email || !Password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(Password, saltRounds);

    const user = await SignupModel.create({
      FullName,
      Email,
      Password: hashedPassword,
    });

    res.status(201).json({
      message: "Signup successful",
      userId: user._id,
    });
  } catch (error) {
    res.status(500).json({
      message: "Signup failed",
      error: error.message,
    });
  }
});

module.exports = signup;
