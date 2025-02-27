import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  Radio,
  RadioGroup,
  FormControlLabel,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [isLoading, setIsLoading] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const navigate = useNavigate();

  const handleConfirmPayment = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setOrderSuccess(true);

      setTimeout(() => {
        navigate("/");
      }, 3000);
    }, 3000);
  };

  return (
    <Box className="payment-container">
      {isLoading ? (
        <Box className="loader-overlay">
          <CircularProgress size={80} />
          <Typography variant="h6" color="white">
            Processing Payment...
          </Typography>
        </Box>
      ) : (
        <Card className="payment-card">
          <Typography variant="h5" gutterBottom>
            Choose Payment Method
          </Typography>

          <RadioGroup
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <FormControlLabel
              value="cod"
              control={<Radio />}
              label="Cash on Delivery (COD)"
            />
          </RadioGroup>

          {orderSuccess ? (
            <Typography className="success-message" variant="h6" color="green">
              ✅ Order Successful!
            </Typography>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={handleConfirmPayment}
            >
              Confirm Payment
            </Button>
          )}
        </Card>
      )}
    </Box>
  );
};

export default Payment;
