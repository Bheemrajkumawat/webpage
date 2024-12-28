// import * as React from "react";
import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";

const pages = ["Home", "Products", "Cart"];
const settings = ["Profile", "Dashboard", "Logout"];

function Header() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const cartItems = useSelector((state) => state.cart.cartItems || []);

  console.log("Items", cartItems);

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCartClick = () => {
    if (cartItems.length > 0) {
      // Navigate to cart if items are present
      navigate("/cart"); 
    } else {
      // Show "Cart is empty" message
      setOpenSnackbar(true); 
    }
  };

  const handleCloseSnackbar = () => {
    // Close the snackbar after 3 seconds
    setOpenSnackbar(false); 
  };

  return (
    <>
     <AppBar position="fixed" sx={{ top: 0, width: "100%" }}>
  <Container maxWidth="xl">
    <Toolbar disableGutters>
      <Typography
        variant="h6"
        noWrap
        component={Link}
        to="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        ROYALKING
      </Typography>

      {/* Mobile menu */}
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography sx={{ textAlign: "center" }}>
                <Link
                  to={`/${page.toLowerCase()}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {page}
                </Link>
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      {/* Desktop menu */}
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            <Link
              to={`/${page.toLowerCase()}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {page}
            </Link>
          </Button>
        ))}
      </Box>

      {/* Cart and Avatar */}
      <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
        <Tooltip title="Shopping Cart">
          <IconButton
            sx={{ color: "white", marginRight: 2 }}
            onClick={handleCartClick}
          >
            <Badge badgeContent={cartItems.length} color="error">
              <ShoppingCartSharpIcon />
            </Badge>
          </IconButton>
        </Tooltip>

        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>

        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography sx={{ textAlign: "center" }}>
                {setting}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Toolbar>

    {/* Snackbar for "Cart is empty" message */}
    <Snackbar
      open={openSnackbar}
      autoHideDuration={3000}
      onClose={handleCloseSnackbar}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        onClose={handleCloseSnackbar}
        severity="warning"
        sx={{ width: "100%" }}
      >
        Your cart is empty.
      </Alert>
    </Snackbar>
  </Container>
</AppBar>

    </>
  );
}

export default Header;
