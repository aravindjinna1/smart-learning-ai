const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {

  console.log("🔥 AUTH MIDDLEWARE HIT 🔥");

  
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized: token missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized: invalid or expired token" });
  }
};

module.exports = authMiddleware;