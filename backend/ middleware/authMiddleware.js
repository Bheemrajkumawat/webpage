// module.exports = { verifyToken };
const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.header("Authorization");
    if (!authHeader) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1]?.trim();

    if (!token) {
      return res
        .status(401)
        .json({ message: "Access Denied: No Token Provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;

    next();
  } catch (error) {
    console.error("Token Verification Error:", error.message);
    return res.status(403).json({ message: "Invalid or Expired Token" });
  }
};

module.exports = { verifyToken };
