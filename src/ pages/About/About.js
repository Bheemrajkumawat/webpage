import React from "react";
import { Box, Typography, Avatar, Grid, Paper } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        padding: "20px",
        marginTop: "80px", // Adjust for fixed header
        paddingBottom: "80px", // Adjust for fixed footer
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
        About Us
      </Typography>

      {/* Company Overview Section */}
      <Paper
        elevation={3}
        sx={{
          padding: "20px",
          marginBottom: "20px",
          backgroundColor: "#fff",
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
          Who We Are
        </Typography>
        <Typography variant="body1" sx={{ textAlign: "center", color: "#666" }}>
          Welcome to [ROYALKING]! We are your one-stop destination for
          high-quality products that cater to your everyday needs. Our goal is
          to deliver the best online shopping experience with a wide range of
          products at unbeatable prices.
        </Typography>
      </Paper>

      {/* Mission & Values */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={3}
            sx={{
              padding: "20px",
              textAlign: "center",
              backgroundColor: "#fff",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: "10px" }}
            >
              Our Mission
            </Typography>
            <Typography variant="body1" sx={{ color: "#666" }}>
              To create a seamless online shopping experience that saves time
              and money for our customers.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            elevation={3}
            sx={{
              padding: "20px",
              textAlign: "center",
              backgroundColor: "#fff",
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: "10px" }}
            >
              Our Values
            </Typography>
            <Typography variant="body1" sx={{ color: "#666" }}>
              Integrity, customer focus, innovation, and quality are the core
              values that drive our operations.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Team Section */}
      <Box sx={{ marginTop: "20px" }}>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Meet Our Team
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {[1, 2, 3].map((member) => (
            <Grid item xs={12} sm={4} key={member}>
              <Paper
                elevation={3}
                sx={{
                  padding: "20px",
                  textAlign: "center",
                  backgroundColor: "#fff",
                }}
              >
                <Avatar
                  alt={`Team Member ${member}`}
                  src={`https://via.placeholder.com/150`}
                  sx={{
                    width: "80px",
                    height: "80px",
                    margin: "0 auto 10px auto",
                  }}
                />
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Team Member {member}
                </Typography>
                <Typography variant="body2" sx={{ color: "#666" }}>
                  Position {member}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Footer Section */}
      <Box
        sx={{
          marginTop: "40px",
          textAlign: "center",
          backgroundColor: "#fff",
          padding: "20px",
          boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="body2" sx={{ color: "#666" }}>
          © 2024 [ROYALKING]. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
