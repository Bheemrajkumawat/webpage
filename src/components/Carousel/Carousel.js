import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const carouselItems = [
  {
    label: "Slide 1",
    description: "This is the first slide",
    image: "Carouselimage/img.webp",
  },
  {
    label: "Slide 2",
    description: "This is the second slide",
    image: "Carouselimage/img222.webp",
  },
  {
    label: "Slide 3",
    description: "This is the third slide",
    image: "Carouselimage/img111.webp",
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Box sx={{ width: "100%", overflow: "hidden" }}>
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: "300px", sm: "400px", md: "600px" }, 
            }}
          >
            <img
              src={item.image}
              alt={item.label}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover", 
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: "10%",
                left: "5%",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <Typography variant="h6">{item.label}</Typography>
              <Typography variant="body2">{item.description}</Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
