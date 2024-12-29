import React from "react";
import Carousel from "../../components/Carousel/Carousel";
// import Cart from "../../ pages/Carts/Cart";
import Products from "../Product/Products";
import { useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Carousel />

      <Products />
    </>
  );
};

export default Home;
