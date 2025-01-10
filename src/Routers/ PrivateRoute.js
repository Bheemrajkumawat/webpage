import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// PrivateRoute to protect profile route
const PrivateRoute = ({ element: Component, ...rest }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return isLoggedIn ? <Component {...rest} /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
