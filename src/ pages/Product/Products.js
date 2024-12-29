import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { useDispatch } from "react-redux";
import { addItem } from "../../Redux/Slice"; // Ensure correct import

const cardData = [
  {
    id: 1,
    title: "Spread Collar Shirt",
    description: 500,
    image: "imageCart/img1.jpg",
  },
  {
    id: 2,
    title: "Slim Fit Jeans",
    description: 600,
    image: "imageCart/img2.jpg",
  },
  {
    id: 3,
    title: "Casual T-Shirt",
    description: 300,
    image: "imageCart/img3.jpg",
  },
  // Add more items here...
];

const Products = () => {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        marginTop: "30px",
      }}
    >
      {/* Main Content */}
      <Box sx={{ flex: 1, padding: "20px" }}>
        <Typography
          variant="h4"
          sx={{ mb: 4, textAlign: "center", marginTop: "20px" }}
        >
          PRODUCTS
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {cardData.map((card) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
              <Card sx={{ maxWidth: 345, margin: "auto" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={card.image}
                    alt={card.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      ₹ {card.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    onClick={() => {
                      dispatch(
                        addItem({
                          id: card.id,
                          image: card.image,
                          title: card.title,
                          description: card.description,
                        })
                      );
                    }}
                    size="small"
                    color="primary"
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "60px",
          backgroundColor: "#333",
          color: "white",
          textAlign: "center",
          lineHeight: "60px",
        }}
      >
        Footer Content
      </Box>
    </Box>
  );
};

export default Products;
