import React from "react";
import { Box, Typography, Avatar, Grid, Paper } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        padding: "20px",
        marginTop: "80px",
        paddingBottom: "80px",
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
          {/* Team Member 1 */}
          <Grid item xs={12} sm={4}>
            <Paper
              elevation={3}
              sx={{
                padding: "20px",
                textAlign: "center",
                backgroundColor: "#fff",
              }}
            >
              <Avatar
                alt={`Team Member 1`}
                src={`imageAbout/bk.jpeg`}
                sx={{
                  width: "80px",
                  height: "80px",
                  margin: "0 auto 10px auto",
                }}
              />
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Team Member 1
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                bhimrajkumawat
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                Position 1
              </Typography>
            </Paper>
          </Grid>

          {/* Team Member 2 */}
          <Grid item xs={12} sm={4}>
            <Paper
              elevation={3}
              sx={{
                padding: "20px",
                textAlign: "center",
                backgroundColor: "#fff",
              }}
            >
              <Avatar
                alt={`Team Member 2`}
                // Update image path
                src={`imageAbout/nk.jpeg`}
                sx={{
                  width: "80px",
                  height: "80px",
                  margin: "0 auto 10px auto",
                }}
              />
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Team Member 2
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                Nareshkumawat
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                Position 2
              </Typography>
            </Paper>
          </Grid>

          {/* Team Member 3 */}
          <Grid item xs={12} sm={4}>
            <Paper
              elevation={3}
              sx={{
                padding: "20px",
                textAlign: "center",
                backgroundColor: "#fff",
              }}
            >
              <Avatar
                alt={`Team Member 3`}
                src={`imageAbout/sk.jpeg`} // Update image path
                sx={{
                  width: "80px",
                  height: "80px",
                  margin: "0 auto 10px auto",
                }}
              />
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Team Member 3
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                Sandeepkumawat
              </Typography>
              <Typography variant="body2" sx={{ color: "#666" }}>
                Position 3
              </Typography>
            </Paper>
          </Grid>
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
          © 2025 [ROYALKING]. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
