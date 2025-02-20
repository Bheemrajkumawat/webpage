const User = require("../ models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register a new user
const registerUser = async (req, res) => {
  const { email_address, password, firstname, lastname } = req.body;
  const existingUser = await User.findOne({ email_address });
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    email_address,
    password: hashedPassword,
    firstname,
    lastname,
  });
  newUser
    .save() // Corrected to instance method
    .then(() => {
      res.json({ message: "Employee added successfully", isSuccess: true });
    })
    .catch(() => {
      res.json({
        message: "An error occurred",
        isSuccess: false,
      });
    });
};

// Login a user

require("dotenv").config();

const loginUser = async (req, res) => {
  try {
    // Debugging: Check if email and password are received properly
    console.log("Request Body:", req.body);
    const { email_address, password } = req.body;

    const user = await User.findOne({ email_address });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      token,
      message: "Login Successful",
      user: { id: user._id, email: user.email_address, name: user.firstname },
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
console.log("JWT_SECRET:", process.env.JWT_SECRET);

// Get user profile
const getUserProfile = async (req, res) => {
  try {
    console.log("Decoded User ID:", req.userId);
    const user = await User.findById(req.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUser, loginUser, getUserProfile };
