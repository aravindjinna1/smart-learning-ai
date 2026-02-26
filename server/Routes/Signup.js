const express = require("express");
const bcrypt = require("bcrypt"); // ✅ MISSING IMPORT
const signup = express.Router();

const SignupModel = require("../Database/Schemas/signupSchema");

// ❌ NOT REQUIRED here because server already uses express.json()
// signup.use(express.json());

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

    res.status(201).json({ // ✅ res.status
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
