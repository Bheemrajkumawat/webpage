import React from "react";

import { Avatar, Box, Button, Card, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../Redux/Slice";

const Profile = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f4f8",
      }}
    >
      <Card
        sx={{
          width: 400,
          textAlign: "center",
          padding: "2rem",
          boxShadow: 3,
          borderRadius: "10px",
        }}
      >
        <Avatar
          sx={{
            width: 100,
            height: 100,
            margin: "0 auto",
            backgroundColor: "#1976d2",
            fontSize: "2rem",
          }}
        >
          {user.name.charAt(0).toUpperCase()}
        </Avatar>
        <Typography variant="h5" sx={{ mt: 2 }}>
          {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {user.email}
        </Typography>
        <Button variant="contained" color="error" onClick={handleLogout}>
          Logout
        </Button>
      </Card>
    </Box>
  );
};

export default Profile;
