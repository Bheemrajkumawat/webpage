import React, { useState } from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementItem,
  decrementItem,
  removeItem,
  clearCart,
} from "../../Redux/Slice";
import {
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Backdrop,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);
  const { isLoggedIn } = useSelector((state) => state.user);

  const [isProcessing, setIsProcessing] = useState(false);

  // ✅ Handle Buy Now Function
  const handleBuyNow = async () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    setIsProcessing(true); 

    try {
      const response = await fetch("http://localhost:4000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cartItems, totalPrice: cartTotalAmount }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Order placed successfully:", data);

      dispatch(clearCart());

      setTimeout(() => {
        setIsProcessing(false);
        navigate("/orders");
      }, 2000);
    } catch (error) {
      console.error("Order error:", error);
      setIsProcessing(false);
    }
  };

  return (
    <div className="cart-container">
      <TableContainer component={Paper} className="table-container">
        {cartItems.length > 0 ? (
          <div className="table-wrapper">
            <Table sx={{ minWidth: 800 }} aria-label="cart table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Image</TableCell>
                  <TableCell align="center">Item Name</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">Total Price</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell align="center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="cart-image"
                      />
                    </TableCell>
                    <TableCell align="center">{item.title}</TableCell>
                    <TableCell align="center">
                      <div className="quantity-buttons">
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() => dispatch(decrementItem(item.id))}
                          disabled={item.quantity <= 1}
                          className="quantity-button"
                        >
                          -
                        </Button>
                        <span>{item.quantity}</span>
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() => dispatch(incrementItem(item.id))}
                          className="quantity-button"
                        >
                          +
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell align="center">₹{item.price}</TableCell>
                    <TableCell align="center">
                      ₹{item.quantity * item.price}
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="error"
                        size="small"
                        onClick={() => dispatch(removeItem(item.id))}
                      >
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Typography variant="h6" className="grand-total">
              Grand Total: ₹{cartTotalAmount}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleBuyNow}
              className="buy-now-button"
              disabled={isProcessing}
            >
              Buy Now
            </Button>
          </div>
        ) : (
          <Typography variant="h6" className="empty-cart-message">
            Your cart is empty.
          </Typography>
        )}
      </TableContainer>

      {/* ✅ Full-screen Loader (Only on Buy Now Click) */}
      {isProcessing && (
        <Backdrop
          open={true}
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <CircularProgress size={60} />
        </Backdrop>
      )}
    </div>
  );
};

export default Cart;
