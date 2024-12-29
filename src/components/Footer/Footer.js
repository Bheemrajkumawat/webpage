import React from "react";
import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import CallIcon from "@mui/icons-material/Call";

const Footer = () => {
  return (
    <Box
      sx={{
        // position: "fixed", 
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "primary.main",
        color: "white",
        py: 1, 
        boxShadow: 3,
        zIndex: 1000,
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        {/* Logo Section */}
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "flex-start" },
          }}
        >
          {/* <img
            src="logo/toyota-logo.png" // Replace with your logo URL
            alt="Logo"
            style={{
              width: "50px",
              height: "50px",
              marginRight: 10,
            }}
          /> */}
          <Typography
            style={{
              width: "50px",
              height: "50px",
              marginRight: 10,
            }}
          >
            ROYALKING
          </Typography>
        </Grid>

        {/* Quick Links Section */}
        <Grid item xs={12} sm={4}>
          <Typography
            variant="body1"
            sx={{ fontSize: { xs: "10px", sm: "12px" }, mb: 1 }}
          >
            Quick Links
          </Typography>
          <Box>
            <Link
              href="/"
              color="inherit"
              underline="hover"
              sx={{ mr: 1, fontSize: { xs: "10px", sm: "12px" } }}
            >
              Home
            </Link>
            <Link
              href="/about"
              color="inherit"
              underline="hover"
              sx={{ mr: 1, fontSize: { xs: "10px", sm: "12px" } }}
            >
              About
            </Link>
            <Link
              href="/contact"
              color="inherit"
              underline="hover"
              sx={{ fontSize: { xs: "10px", sm: "12px" } }}
            >
              Contact
            </Link>
          </Box>
        </Grid>

        {/* Social Media Icons */}
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", sm: "flex-start" },
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontSize: { xs: "10px", sm: "12px" }, mb: 1 }}
          >
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              color="inherit"
              size="small"
            >
              <Facebook fontSize="small" />
            </IconButton>
            <IconButton
              href="https://twitter.com"
              target="_blank"
              color="inherit"
              size="small"
            >
              <Twitter fontSize="small" />
            </IconButton>
            <IconButton
              href="https://instagram.com"
              target="_blank"
              color="inherit"
              size="small"
            >
              <Instagram fontSize="small" />
            </IconButton>
            <IconButton
              href="https://linkedin.com"
              target="_blank"
              color="inherit"
              size="small"
            >
              <LinkedIn fontSize="small" />
            </IconButton>
          </Box>
          <Box sx={{ mt: 0.5, display: "flex", alignItems: "center", gap: 1 }}>
            <CallIcon sx={{ fontSize: { xs: 16, sm: 20 } }} />
            <Typography
              variant="body2"
              sx={{
                fontSize: { xs: "10px", sm: "12px" },
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              +1 234 567 890
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box
        sx={{
          textAlign: "center",
          mt: 1,
          pt: 0.5,
          fontSize: { xs: "10px", sm: "12px" },
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        &copy; {new Date().getFullYear()} ROYALKING. royalking@gmail.com.
      </Box>
    </Box>
  );
};

export default Footer;
