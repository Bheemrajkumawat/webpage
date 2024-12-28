import React from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { incrementItem, decrementItem } from "../../Redux/Slice"; // Replace with actual Redux actions

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const dispatch = useDispatch();

  return (
    <>
      <Box sx={{ flex: 1, padding: "20px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Your Cart
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                <Card sx={{ maxWidth: 345, margin: "auto" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image={item.image}
                      alt={item.title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {item.description}
                      </Typography>

                      <Typography variant="body1" sx={{ marginTop: 1 }}>
                        Quantity: {item.quantity}
                      </Typography>
                      <Typography variant="body1" sx={{ marginTop: 1 }}>
                        total price: {item.quantity* item.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => dispatch(incrementItem(item.id))}
                    >
                      Increment
                    </Button>
                    {item.length}
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => dispatch(decrementItem(item.id))}
                    >
                      Decrement
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          ) : (
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              padding="10px"
              marginTop="100px"
              fontSize="50px"
              border="10px red"
              borderRadius="10px"
              bgcolor="#1976d2"
            >
              Your cart is empty.
            </Typography>
          )}
        </Grid>
      </Box>
    </>
  );
};

export default Cart;
