const User = require("../ models/User");
const Order = require("../ models/Order");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
require("dotenv").config();

// 🔹 Configure Multer for Image Upload
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, `${req.userId}_${Date.now()}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage });
// Register a new user
const registerUser = async (req, res) => {
  const {
    email_address,
    password,
    firstname,
    lastname,
    phone_number,
    address,
    pincode,
  } = req.body;
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
    phone_number,
    address,
    pincode,
    // Default empty image field
    profileImage: "",
  });
  newUser
    // Corrected to instance method
    .save()
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
      user: {
        id: user._id,
        email: user.email_address,
        name: user.firstname,
        phone_number: user.phone_number,
        address: user.address,
        pincode: user.pincode,
        profileImage: user.profileImage,
      },
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

// 🔹 Upload Profile Image
const uploadProfileImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const imageUrl = `http://localhost:4000/uploads/${req.file.filename}`;
    await User.findByIdAndUpdate(req.userId, { profileImage: imageUrl });

    res.json({ message: "Profile image uploaded successfully", imageUrl });
  } catch (error) {
    console.error("Image Upload Error:", error);
    res.status(500).json({ message: "Error uploading image" });
  }
};

const addOrder = async (req, res) => {
  try {
    const { items, totalPrice } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    // Ensure each item has a price
    const updatedItems = items.map((item) => ({
      ...item,
      price: item.price,
    }));

    const newOrder = new Order({ items: updatedItems, totalPrice });
    await newOrder.save();

    res
      .status(201)
      .json({ message: "Order placed successfully", order: newOrder });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
  uploadProfileImage,
  addOrder,
  getOrders,
};
