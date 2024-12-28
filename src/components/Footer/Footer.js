import React from "react";
import { Box, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import CallIcon from "@mui/icons-material/Call";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "primary.main",
        color: "white",
        py: 2,
        boxShadow: 3,
        zIndex: 1000,
      }}
    >
      <Grid container spacing={4} sx={{ maxWidth: "1200px", margin: "auto" }}>
        {/* Logo Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="logo/toyota-logo.png" // Replace with your logo URL
              alt="Logo"
              style={{ width: "100px", height: "100px", marginRight: 10 }}
            />
            {/* <Typography variant="h6">ROYALKING</Typography> */}
          </Box>
        </Grid>

        {/* Quick Links Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Quick Links
          </Typography>
          <Box>
            <Link href="/" color="inherit" underline="hover" sx={{ mr: 2 }}>
              Home
            </Link>
            <Link
              href="/about"
              color="inherit"
              underline="hover"
              sx={{ mr: 2 }}
            >
              About
            </Link>
            <Link href="/contact" color="inherit" underline="hover">
              Contact
            </Link>
          </Box>
        </Grid>

        {/* Social Media Icons */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              color="inherit"
            >
              <Facebook />
            </IconButton>
            <IconButton
              href="https://twitter.com"
              target="_blank"
              color="inherit"
            >
              <Twitter />
            </IconButton>
            <IconButton
              href="https://instagram.com"
              target="_blank"
              color="inherit"
            >
              <Instagram />
            </IconButton>
            <IconButton
              href="https://linkedin.com"
              target="_blank"
              color="inherit"
            >
              <LinkedIn />
            </IconButton>
            <IconButton href="tel:+8898989898" color="inherit">
              <CallIcon sx={{ fontSize: 30 }} />
            </IconButton>
            <Typography variant="body1" sx={{ fontSize: 18, marginTop: 1 }}>
              8898989898
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box
        sx={{
          textAlign: "center",
          mt: 4,
          pt: 2,
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} ROYALKING. royalking@gmail.com.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
