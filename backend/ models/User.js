const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email_address: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  profileImage: { type: String, default: "" }, // Added profile image field
});

const User = mongoose.model("User", userSchema);

module.exports = User;
