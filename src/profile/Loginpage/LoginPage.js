import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Redux/Slice";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters long")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/auth/login",
          {
            email_address: values.email,
            password: values.password,
          }
        );

        const { token, user } = response.data;

        dispatch(loginUser({ user, token }));

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        navigate("/profile");
      } catch (error) {
        console.error("Login Error:", error.response?.data || error.message);
        alert(error.response?.data?.message || "Login failed");
      }
    },
  });

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} sm={8} md={4}>
        <Box p={4} boxShadow={3} borderRadius={2} bgcolor="white">
          <Typography variant="h4" component="h1" gutterBottom>
            Login
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Box mb={3}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email Address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Box>
            <Link to="/RegistrationForm" style={{ color: "blue" }}>
              Don't have an account? Register here
            </Link>
            <Button
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              style={{ marginTop: "20px" }}
            >
              Login
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
