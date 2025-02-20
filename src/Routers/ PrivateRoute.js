import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// PrivateRoute to protect profile route
const PrivateRoute = ({Component} ) => {
  // const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn) || !!localStorage.getItem("token");

console.log(isLoggedIn)
  return isLoggedIn ? <Component /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
