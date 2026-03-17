const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema(
  {
    FullName: {
      type: String,
      required: true,
      trim: true,
    },

    Email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    Password: {
      type: String,
      required: true,
    },

    // 🔽 REQUIRED FOR FORGOT PASSWORD
    resetToken: {
      type: String,
    },

    resetTokenExpiry: {
      type: Date,
    },
  },
  { timestamps: true }
);

// IMPORTANT: keep model name same to avoid breaking existing data
module.exports = mongoose.model("Signup", signupSchema);