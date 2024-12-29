import React, { useState } from "react";
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
  Box,
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
    <Box sx={{ marginTop: "80px", paddingBottom: "80px" }}>
      <TableContainer
        component={Paper}
        sx={{
          marginTop: "20px",
          overflowX: "auto",
          textAlign: "center",
          padding: "20px",
          "@media (max-width: 600px)": {
            padding: "10px",
          },
        }}
      >
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
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "contain",
                        }}
                      />
                    </TableCell>
                    <TableCell align="center">{item.title}</TableCell>
                    <TableCell align="center">
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() => dispatch(decrementItem(item.id))}
                          disabled={item.quantity <= 1}
                          sx={{
                            minWidth: "35px",
                            height: "35px",
                            fontSize: "16px",
                            padding: "0",
                            margin: "0 5px",
                            "@media (max-width: 600px)": {
                              minWidth: "40px",
                              height: "40px",
                              fontSize: "18px",
                            },
                          }}
                        >
                          -
                        </Button>
                        <span>{item.quantity}</span>
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() => dispatch(incrementItem(item.id))}
                          sx={{
                            minWidth: "35px",
                            height: "35px",
                            fontSize: "16px",
                            padding: "0",
                            margin: "0 5px",
                            "@media (max-width: 600px)": {
                              minWidth: "40px",
                              height: "40px",
                              fontSize: "18px",
                            },
                          }}
                        >
                          +
                        </Button>
                      </Box>
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
            <Typography
              variant="h6"
              sx={{ textAlign: "right", paddingRight: "20px" }}
            >
              Grand Total: ₹{cartTotalAmount}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleBuyNow}
              sx={{
                width: "150px",
                height: "40px",
                display: "block",
                mx: "auto",
                marginTop: "10px",
                "@media (max-width: 600px)": {
                  width: "80%",
                  height: "45px",
                },
              }}
            >
              {isRedirecting ? (
                <CircularProgress size={24} sx={{ color: "#fff" }} />
              ) : (
                "Buy Now"
              )}
            </Button>
          </>
        ) : (
          <Typography variant="h6" sx={{ textAlign: "center", color: "gray" }}>
            Your cart is empty.
          </Typography>
        )}
      </TableContainer>
    </Box>
  );
};

export default Cart;
