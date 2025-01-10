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

import LoginPage from "../profile/Loginpage/LoginPage";
import RegistrationForm from "../profile/RegistrationForm";

import PrivateRoute from "./ PrivateRoute";
// import { useSelector } from "react-redux";

export default function Router() {
  // const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          {/* Define the routes */}
          <Route path="/" element={<Home />}></Route>
          <Route path="products" element={<Products />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="about" element={<About />}></Route>

          {/* Protect the Profile route using PrivateRoute */}
          <Route path="/profile" element={<PrivateRoute element={Profile} />} />
          <Route path="/RegistrationForm" element={<RegistrationForm />} />
          <Route />
          <Route path="login" element={<LoginPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
