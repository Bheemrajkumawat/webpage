import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementItem, decrementItem, removeItem } from "../../Redux/Slice";
import { Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box } from "@mui/material";
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
    }, 1000);
  };

  return (
    <Box sx={{ marginTop: "80px", paddingBottom: "80px" }}> {/* Adjusted for fixed header and footer */}
      <TableContainer
        component={Paper}
        sx={{
          marginTop: "20px",
          overflowX: "auto",
          textAlign: "center",
          padding: "20px",
          '@media (max-width: 600px)': {
            padding: '10px',
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
                      {/* Increment and Decrement Buttons */}
                      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() => dispatch(decrementItem(item.id))}
                          disabled={item.quantity <= 1}
                          sx={{
                            minWidth: "35px",  // Increased width
                            height: "35px",    // Increased height
                            fontSize: "16px",  // Adjust font size
                            padding: "0",      // Remove extra padding
                            margin: "0 5px",   // Add margin between buttons
                            '@media (max-width: 600px)': {
                              minWidth: '40px', // Button width on mobile
                              height: '40px',   // Button height on mobile
                              fontSize: '18px', // Font size on mobile
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
                            minWidth: "35px",  // Increased width
                            height: "35px",    // Increased height
                            fontSize: "16px",  // Adjust font size
                            padding: "0",      // Remove extra padding
                            margin: "0 5px",   // Add margin between buttons
                            '@media (max-width: 600px)': {
                              minWidth: '40px', // Button width on mobile
                              height: '40px',   // Button height on mobile
                              fontSize: '18px', // Font size on mobile
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
            <Typography variant="h6" sx={{ textAlign: "right", paddingRight: "20px" }}>
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
                '@media (max-width: 600px)': {
                  width: '80%',  // Responsive width
                  height: '45px', // Increase height for touch targets
                },
              }}
            >
              Buy Now
            </Button>
          </>
        ) : (
          <Typography variant="h6" sx={{ textAlign: "center", color: "gray" }}>
            Your cart is empty.
          </Typography>
        )}
      </TableContainer>

      {/* Fixed Footer */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#fff",
          padding: "10px 0",
          boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
          textAlign: "center",
          zIndex: 10,
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleBuyNow}
          sx={{
            width: "150px",
            height: "40px",
            display: "block",
            mx: "auto",
            '@media (max-width: 600px)': {
              width: '80%', // Responsive width
              height: '50px', // Larger height on mobile
            },
          }}
        >
          Buy Now
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;
