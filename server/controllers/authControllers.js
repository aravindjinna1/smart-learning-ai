// controllers/passwordController.js
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const Signup = require("../Database/Schemas/signupSchema"); // ✅ correct model
const sendEmail = require("../Routes/sendEmail");

// POST /auth/forgot-password
exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await Signup.findOne({
      Email: email.toLowerCase(),
    });

    // Always return same response (security)
    if (!user) {
      return res.json({
        message: "If the email exists, a reset link has been sent.",
      });
    }

    const token = crypto.randomBytes(32).toString("hex");

    user.resetToken = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");

    user.resetTokenExpiry = Date.now() + 15 * 60 * 1000; // 15 minutes

    await user.save();

    const link = `${process.env.FRONTEND_URL}/Auth/reset-password?token=${token}&email=${encodeURIComponent(
      user.Email
    )}`;

    await sendEmail({
      to: user.Email,
      subject: "Reset Your Password",
      html: `
        <p>You requested a password reset.</p>
        <p>
          <a href="${link}">Click here to reset your password</a>
        </p>
        <p>This link will expire in 15 minutes.</p>
      `,
    });

    return res.json({
      message: "If the email exists, a reset link has been sent.",
    });
  } catch (err) {
    console.error("Forgot password error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};

// POST /auth/reset-password
exports.resetPassword = async (req, res) => {
  try {
    const { token, email, password } = req.body;

    const hashedToken = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");

    const user = await Signup.findOne({
      Email: email.toLowerCase(),
      resetToken: hashedToken,
      resetTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        message: "Reset link is invalid or expired.",
      });
    }

    user.Password = await bcrypt.hash(password, 10); // ✅ correct field
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;

    await user.save();

    return res.json({
      message: "Password reset successful. You can now log in.",
    });
  } catch (err) {
    console.error("Reset password error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};