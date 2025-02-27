const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        id: String,
        title: String,
        quantity: Number,
        price: Number,
        image: String,
      },
    ],
    totalPrice: { type: Number, required: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

//  Check if the model already exists to prevent OverwriteModelError
const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

module.exports = Order;
