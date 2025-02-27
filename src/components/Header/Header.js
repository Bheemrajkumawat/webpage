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
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Snackbar } from "@mui/material";
import { logoutUser } from "../../Redux/Slice";

const pages = ["Products", "Cart"];

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (url) => {
    setAnchorElNav(null);
    navigate(url);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCartClick = () => {
    if (cartItems.length > 0) {
      navigate("/cart");
    } else {
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  // Redux से user data और login state
  const user = useSelector((state) => state.user.userData || null);
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  // Local Storage से user डेटा लेना
  const [localUser, setLocalUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  useEffect(() => {
    if (user) {
      setLocalUser(user);
    }
  }, [user]);

  // अगर profile image नहीं है, तो पहले अक्षर को दिखाने के लिए
  const firstLetter = localUser?.firstname?.charAt(0)?.toUpperCase() || "U";

  return (
    <>
      <AppBar sx={{ top: 0, width: "100%" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="menu"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={() => handleCloseNavMenu(`/${page.toLowerCase()}`)}
                  >
                    <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
            >
              ROYALKING
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleCloseNavMenu(`/${page.toLowerCase()}`)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

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

              {/* Avatar Update - अब Profile Image को सही तरीके से दिखाएगा */}
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="User Avatar" src={localUser?.profileImage || ""}>
                    {!localUser?.profileImage && firstLetter}
                  </Avatar>
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "right" }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem>
                  <Typography sx={{ textAlign: "center" }}>
                    <Link
                      to="/profile"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Profile
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {isLoggedIn ? (
                      <Link
                        to="/login"
                        style={{ textDecoration: "none", color: "inherit" }}
                        onClick={handleLogout}
                      >
                        Logout
                      </Link>
                    ) : (
                      <Link
                        to="/login"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        Login
                      </Link>
                    )}
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>

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
