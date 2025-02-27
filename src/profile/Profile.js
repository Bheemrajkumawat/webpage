import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logoutUser, loginUser } from "../Redux/Slice";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageUploading, setImageUploading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        const { data } = await axios.get(
          "http://localhost:4000/api/auth/profile",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        dispatch(loginUser({ user: data, token }));
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError("Failed to load profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate, dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(logoutUser());
    navigate("/login");
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("profileImage", file);

    setImageUploading(true);

    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.post(
        "http://localhost:4000/api/auth/uploadProfileImage",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const updatedUser = { ...user, profileImage: data.imageUrl };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    } catch (error) {
      console.error("Error uploading image:", error);
      setError("Image upload failed.");
    } finally {
      setImageUploading(false);
    }
  };

  if (loading) {
    return (
      <Box className="center-box">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box className="center-box">
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  const handleAddAccount = () => {
    navigate("/RegistrationForm");
  };

  const handleViewOrderHistory = () => {
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      navigate("/order-history");
    }, 2000);
  };

  return (
    <Box className="profile-container">
      <Card className="profile-card">
        <label htmlFor="profile-pic">
          <Avatar className="avatar" src={user?.profileImage || ""}>
            {!user?.profileImage &&
              (user?.firstname?.charAt(0)?.toUpperCase() || "U")}
          </Avatar>
        </label>
        <input
          type="file"
          id="profile-pic"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
        {imageUploading && (
          <Typography color="primary">Uploading...</Typography>
        )}
        <Typography className="name" variant="h5">
          {user?.firstname || "Unknown User"} {user?.lastname || ""}
        </Typography>
        <Typography className="email" variant="body2" color="text.secondary">
          {user?.email_address || "No Email Available"}
        </Typography>
        <Button
          className="logout-button"
          variant="contained"
          color="error"
          onClick={handleLogout}
        >
          Logout
        </Button>

        <Button
          variant="contained"
          color="success"
          size="small"
          onClick={handleAddAccount}
          style={{ marginLeft: "auto", marginRight: 0, marginTop: "10px" }}
        >
          Add Account
        </Button>
      </Card>
      {/* ✅ Order History Button */}
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "300px" }}
        onClick={() => {
          handleViewOrderHistory();
        }}
        disabled={isProcessing}
      >
        View Order History
      </Button>
    </Box>
  );
};

export default Profile;
