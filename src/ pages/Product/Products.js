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
import { addItem } from "../../Redux/Slice";
import "./Products.css"

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
  {
    id: 4,
    title: "Casual T-Shirt",
    description: 300,
    image: "imageCart/img4.jpg",
  },
  {
    id: 5,
    title: "Casual T-Shirt",
    description: 300,
    image: "imageCart/img5.jpg",
  },
  {
    id: 6,
    title: "Casual T-Shirt",
    description: 300,
    image: "imageCart/img7.jpg",
  },
  {
    id: 7,
    title: "Casual T-Shirt",
    description: 300,
    image: "imageCart/img8.jpg",
  },
  {
    id: 8,
    title: "Casual T-Shirt",
    description: 300,
    image: "imageCart/img9.jpg",
  },
  {
    id: 9,
    title: "Casual T-Shirt",
    description: 300,
    image: "imageCart/img10.jpg",
  },
  {
    id: 10,
    title: "Casual T-Shirt",
    description: 300,
    image: "imageCart/img11.jpg",
  },
  {
    id: 11,
    title: "Casual T-Shirt",
    description: 300,
    image: "imageCart/img12.jpg",
  },
  {
    id: 12,
    title: "Casual T-Shirt",
    description: 300,
    image: "imageCart/img13.jpg",
  },

  // Add more items here...
];

const Products = () => {
  const dispatch = useDispatch();

  return (
    <Box className="products-container">
      <Box className="products-main-content">
        <Typography variant="h4" className="products-title">
          PRODUCTS
        </Typography>
        <Grid container spacing={2} className="card-grid">
          {cardData.map((card) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
              <Card className="card-item">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    className="card-media"
                    image={card.image}
                    alt={card.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="card-title"
                    >
                      {card.title}
                    </Typography>
                    <Typography variant="body2" className="card-price">
                      ₹ {card.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    onClick={() =>
                      dispatch(
                        addItem({
                          id: card.id,
                          image: card.image,
                          title: card.title,
                          description: card.description,
                        })
                      )
                    }
                    className="add-to-cart-btn"
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Products;
