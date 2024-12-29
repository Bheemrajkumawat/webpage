import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";

const Contact = () => {
  return (
    <Box
      sx={{
        marginTop: "80px", // Adjust for fixed header
        paddingBottom: "80px", // Adjust for fixed footer
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
        Contact Us
      </Typography>

      {/* Contact Form */}
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
          sx={{ textAlign: "center", fontWeight: "bold", marginBottom: "10px" }}
        >
          Get in Touch
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            color: "#666",
            marginBottom: "20px",
          }}
        >
          Have a question or need help? Fill out the form below and we’ll get
          back to you as soon as possible.
        </Typography>
        <form>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            sx={{ marginBottom: "15px" }}
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            sx={{ marginBottom: "15px" }}
          />
          <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            sx={{ marginBottom: "20px" }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ padding: "10px" }}
          >
            Send Message
          </Button>
        </form>
      </Paper>

      {/* Contact Information */}
      <Box
        sx={{
          marginTop: "20px",
        }}
      >
        <Typography
          variant="h6"
          sx={{ textAlign: "center", fontWeight: "bold", marginBottom: "10px" }}
        >
          Our Contact Details
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Paper
              elevation={3}
              sx={{
                padding: "15px",
                textAlign: "center",
                backgroundColor: "#fff",
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", marginBottom: "5px" }}
              >
                Email
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                support@ecommerce.com
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper
              elevation={3}
              sx={{
                padding: "15px",
                textAlign: "center",
                backgroundColor: "#fff",
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", marginBottom: "5px" }}
              >
                Phone
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                +1 234 567 890
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper
              elevation={3}
              sx={{
                padding: "15px",
                textAlign: "center",
                backgroundColor: "#fff",
              }}
            >
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", marginBottom: "5px" }}
              >
                Address
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                123 E-commerce St, Online City, Webland
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;

