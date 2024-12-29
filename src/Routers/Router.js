import React from "react";

import Header from "../components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../ pages/Home/Home";
import Products from "../ pages/Product/Products";
import Cart from "../ pages/Carts/Cart";
import Contact from "../ pages/Contact/Contact";
import Footer from "../components/Footer/Footer";
import About from "../ pages/About/About";
import Profile from "../profile/Profile";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
