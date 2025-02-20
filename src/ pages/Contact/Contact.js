import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";

const Contact = () => {
  return (
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
        Contact Us
      </Typography>

      {/* Contact Banner */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "500px",
          backgroundImage: "url('imageAbout/tropical-shirt-on-blue-background-with-copyspace-generative-ai-photo.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "10px",
          color: "white",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "24px",
          marginBottom: "20px",
        }}
      >
        Get in Touch with Us!
      </Box>

      {/* Contact Information */}
      <Box sx={{ marginTop: "20px" }}>
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
                bheemrajkumawat127@gmail.com
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
               +91 9983392931
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
                shishu(sikar)
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
