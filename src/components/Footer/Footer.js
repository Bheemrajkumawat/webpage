import React from "react";
import { Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import CallIcon from "@mui/icons-material/Call";
import "./Footer.css"; // Import external CSS

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-grid">
        <Grid container spacing={2}>
          {/* Logo Section */}
          <Grid item xs={12} sm={4}>
            <div className="footer-logo">
              <Typography className="footer-logo-text">ROYALKING</Typography>
            </div>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="body1" className="footer-section-title">
              Quick Links
            </Typography>
            <div className="footer-quick-links">
              <Link href="/" color="inherit">
                Home
              </Link>
              <Link href="/about" color="inherit">
                About
              </Link>
              <Link href="/contact" color="inherit">
                Contact
              </Link>
            </div>
          </Grid>

          {/* Social Media Icons */}
          <Grid item xs={12} sm={4}>
            <Typography variant="body1" className="footer-section-title">
              Follow Us
            </Typography>
            <div className="footer-social-icons">
              <IconButton
                href="https://facebook.com"
                target="_blank"
                size="small"
              >
                <Facebook fontSize="small" />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                size="small"
              >
                <Twitter fontSize="small" />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                size="small"
              >
                <Instagram fontSize="small" />
              </IconButton>
              <IconButton
                href="https://linkedin.com"
                target="_blank"
                size="small"
              >
                <LinkedIn fontSize="small" />
              </IconButton>
            </div>
            <div className="footer-call">
              <CallIcon />
              <Typography variant="body2">+1 234 567 890</Typography>
            </div>
          </Grid>
        </Grid>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} ROYALKING. royalking@gmail.com.
      </div>
    </div>
  );
};

export default Footer;
