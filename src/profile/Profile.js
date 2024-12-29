import {
  Box,
  Button,
  Paper,
  Select,
  MenuItem,
  Typography,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const Profile = () => {
  const [formData, setFormData] = useState({
    pincode: "",
    district: "",
    tehsil: "",
    village: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const districts = ["District 1", "District 2", "District 3"]; // Example values
  const tehsils = ["Tehsil 1", "Tehsil 2", "Tehsil 3"]; // Example values
  const villages = ["Village 1", "Village 2", "Village 3"]; // Example values

  return (
    <div>
      <Box
        sx={{
          marginTop: "80px",
          paddingBottom: "80px",
          padding: "20px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#333",
          }}
        >
          Registration Form
        </Typography>

        {/* Registration Form */}
        <Paper
          elevation={3}
          sx={{
            padding: "20px",
            marginBottom: "20px",
            backgroundColor: "#fff",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Create Your Account
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              color: "#666",
              marginBottom: "20px",
            }}
          >
            Fill out the form below to register.
          </Typography>
          <form>
          <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                sx={{ marginBottom: "15px" }}
              />
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                sx={{ marginBottom: "15px" }}
              />
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
                sx={{ marginBottom: "15px" }}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                name="password"
                value={formData.password}
                onChange={handleChange}
                sx={{ marginBottom: "15px" }}
              />
              <TextField
                fullWidth
                label="Confirm Password"
                type="password"
                variant="outlined"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                sx={{ marginBottom: "20px" }}
              />
            {/* Address Details with Dropdowns */}
            <FormControl fullWidth sx={{ marginBottom: "15px" }}>
              <InputLabel>Pincode</InputLabel>
              <Select
                label="Pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
              >
                {/* Replace these values with actual pincode options */}
                <MenuItem value="123456">123456</MenuItem>
                <MenuItem value="654321">654321</MenuItem>
                <MenuItem value="111222">111222</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ marginBottom: "15px" }}>
              <InputLabel>District</InputLabel>
              <Select
                label="District"
                name="district"
                value={formData.district}
                onChange={handleChange}
              >
                {districts.map((district, index) => (
                  <MenuItem key={index} value={district}>
                    {district}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ marginBottom: "15px" }}>
              <InputLabel>Tehsil</InputLabel>
              <Select
                label="Tehsil"
                name="tehsil"
                value={formData.tehsil}
                onChange={handleChange}
              >
                {tehsils.map((tehsil, index) => (
                  <MenuItem key={index} value={tehsil}>
                    {tehsil}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ marginBottom: "15px" }}>
              <InputLabel>Village</InputLabel>
              <Select
                label="Village"
                name="village"
                value={formData.village}
                onChange={handleChange}
              >
                {villages.map((village, index) => (
                  <MenuItem key={index} value={village}>
                    {village}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ padding: "10px" }}
            >
              Register
            </Button>
          </form>
        </Paper>
      </Box>
    </div>
  );
};

export default Profile;
