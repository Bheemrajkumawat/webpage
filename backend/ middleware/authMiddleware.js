const jwt = require("jsonwebtoken");
// require("dotenv").config();

const verifyToken = (req, res, next) => {
  // Authorization header se token ko extract karna
  const token = req.header("Authorization")?.split(" ")[1];  

  // Agar token nahi milta, to error return karein
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    // Token ko verify karna
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
     // Token se userId ko extract karna
    req.userId = decoded.userId; 
     // Agle middleware ko call karna
    next(); 
  } catch (error) {
    // Agar token invalid ya expired ho, to error message bhejna
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = { verifyToken };
