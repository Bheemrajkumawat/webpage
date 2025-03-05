const express = require("express");
const { addOrder, getOrders } = require("../controllers/authController");
const {
  registerUser,
  loginUser,
  getUserProfile,
  uploadProfileImage,
} = require("../controllers/authController");
const { verifyToken } = require("../ middleware/authMiddleware");
const multer = require("multer");
const path = require("path");
const router = express.Router();

// Multer Storage Configuration for Profile Image Uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Images will be stored in 'uploads' folder
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Register route
router.post("/register", registerUser);

// Login route
router.post("/login", loginUser);

// Profile route (protected)
router.get("/profile", verifyToken, getUserProfile);
// Profile Image Upload Route (protected)

router.post(
  "/uploadProfileImage",
  verifyToken,
  upload.single("profileImage"),
  uploadProfileImage
);

module.exports = router;
