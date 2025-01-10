import React, { useState } from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { incrementItem, decrementItem, removeItem } from "../../Redux/Slice";
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
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleBuyNow = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      navigate("/payment");
    }, 2000); // Delay for loader
  };

  return (
    <div className="cart-container">
      <TableContainer component={Paper} className="table-container">
        {cartItems.length > 0 ? (
          <>
            <Table sx={{ minWidth: 650 }} aria-label="cart table">
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
                    <TableCell align="center">₹{item.description}</TableCell>
                    <TableCell align="center">
                      ₹{item.quantity * item.description}
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
            >
              {isRedirecting ? (
                <CircularProgress size={24} sx={{ color: "#fff" }} />
              ) : (
                "Buy Now"
              )}
            </Button>
          </>
        ) : (
          <Typography variant="h6" className="empty-cart-message">
            Your cart is empty.
          </Typography>
        )}
      </TableContainer>
    </div>
  );
};

export default Cart;
