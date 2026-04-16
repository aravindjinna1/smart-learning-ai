

const express = require("express");
const signin = express.Router();
const signupSchema = require("../Database/Schemas/signupSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

signin.post("/signin", async (req, res) => {
  try {
    const { Email, Password } = req.body;

    // 1. Validation
    if (!Email || !Password) {
      return res.status(400).json({
        message: "Email and Password are required",
      });
    }

    // 2. User lookup
    const user = await signupSchema.findOne({ Email });
    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    // 3. Password check
    const isMatch = await bcrypt.compare(Password, user.Password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    // 4. JWT creation
    const payload = { userId: user._id };

    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET_KEY,
      { expiresIn: "4h" }
    );


    return res.status(200).json({
      message: "Signin successful",
      userId: user._id,
      token: token,
    });

  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

module.exports = signin;
