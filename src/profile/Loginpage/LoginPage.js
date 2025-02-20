// import React, { useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { TextField, Button, Box, Typography, Grid } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { loginUser } from "../../Redux/Slice";

// const LoginPage = () => {

//   const [email, setEmail] = useState("");
//   const user = useSelector((state) => state.user.user);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     if (user && user.email === email) {
//       dispatch(loginUser());
//       navigate("/profile");
//     } else {
//       alert("Incorrect email or not registered.");
//     }
//   };

//   // const register=()=>{
//   //   navigate("/RegistrationForm")
//   // }

//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: Yup.object({
//       email: Yup.string()
//         .email("Invalid email address")
//         .required("Email is required"),
//       password: Yup.string()
//         .min(8, "Password must be at least 8 characters long")
//         .required("Password is required"),
//     }),
//     onSubmit: (values) => {
//       console.log("Login Data:", values);
//       handleLogin(); // Trigger the login process after validation
//     },
//   });

//   return (
//     <Grid
//       container
//       justifyContent="center"
//       alignItems="center"
//       style={{ minHeight: "100vh" }}
//     >
//       <Grid item xs={12} sm={8} md={4}>
//         <Box p={4} boxShadow={3} borderRadius={2} bgcolor="white">
//           <Typography variant="h4" component="h1" gutterBottom>
//             Login
//           </Typography>
//           <form onSubmit={formik.handleSubmit}>
//             <Box mb={3}>
//               <TextField
//                 fullWidth
//                 id="email"
//                 name="email"
//                 label="Email Address"
//                 value={formik.values.email}
//                 onChange={(e) => {
//                   formik.handleChange(e);
//                   setEmail(e.target.value); // Update email state
//                 }}
//                 onBlur={formik.handleBlur}
//                 error={formik.touched.email && Boolean(formik.errors.email)}
//                 helperText={formik.touched.email && formik.errors.email}
//               />
//             </Box>
//             <Box mb={3}>
//               <TextField
//                 fullWidth
//                 id="password"
//                 name="password"
//                 label="Password"
//                 type="password"
//                 value={formik.values.password}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 error={
//                   formik.touched.password && Boolean(formik.errors.password)
//                 }
//                 helperText={formik.touched.password && formik.errors.password}
//               />
//             </Box>
//             <Link to="/RegistrationForm" style={{color:"blue"}}>RegistrForm</Link>
//             <Button
//               color="primary"
//               variant="contained"
//               fullWidth
//               type="submit"
//               style={{marginTop:"20px"}}
//             >
//               Login
//             </Button>
//           </form>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default LoginPage;

// import React, { useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { TextField, Button, Box, Typography, Grid } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   // Function to handle the login request
//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("http://localhost:4000/api/auth/login", { email, password });

//       // Assuming a successful response, store the token in localStorage

//       localStorage.setItem("token", response.data.token);
//       navigate("/profile");  // Redirect to profile page after successful login
//     } catch (error) {
//       console.error("Login failed:", error);
//       alert("Invalid email or password");
//     }
//   };

//   // Using Formik for form handling and validation
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: Yup.object({
//       email: Yup.string()
//         .email("Invalid email address")
//         .required("Email is required"),
//       password: Yup.string()
//         .min(8, "Password must be at least 8 characters long")
//         .required("Password is required"),
//     }),
//     onSubmit: (values) => {
//       console.log("Form Data:", values);
//       setEmail(values.email);
//       setPassword(values.password);
//       handleLogin();  // Trigger the login process after validation
//     },
//   });

//   return (
//     <Grid
//       container
//       justifyContent="center"
//       alignItems="center"
//       style={{ minHeight: "100vh" }}
//     >
//       <Grid item xs={12} sm={8} md={4}>
//         <Box p={4} boxShadow={3} borderRadius={2} bgcolor="white">
//           <Typography variant="h4" component="h1" gutterBottom>
//             Login
//           </Typography>
//           <form onSubmit={formik.handleSubmit}>
//             <Box mb={3}>
//               <TextField
//                 fullWidth
//                 id="email"
//                 name="email"
//                 label="Email Address"
//                 value={formik.values.email}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 error={formik.touched.email && Boolean(formik.errors.email)}
//                 helperText={formik.touched.email && formik.errors.email}
//               />
//             </Box>
//             <Box mb={3}>
//               <TextField
//                 fullWidth
//                 id="password"
//                 name="password"
//                 label="Password"
//                 type="password"
//                 value={formik.values.password}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 error={formik.touched.password && Boolean(formik.errors.password)}
//                 helperText={formik.touched.password && formik.errors.password}
//               />
//             </Box>
//             <Link to="/RegistrationForm" style={{ color: "blue" }}>
//               Don't have an account? Register here
//             </Link>
//             <Button
//               color="primary"
//               variant="contained"
//               fullWidth
//               type="submit"
//               style={{ marginTop: "20px" }}
//             >
//               Login
//             </Button>
//           </form>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default LoginPage;

// import React, { useState } from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { TextField, Button, Box, Typography, Grid } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { loginUser } from "../../Redux/Slice";

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Formik Setup
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: Yup.object({
//       email: Yup.string()
//         .email("Invalid email address")
//         .required("Email is required"),
//       password: Yup.string()
//         .min(8, "Password must be at least 8 characters long")
//         .required("Password is required"),
//     }),
//     onSubmit: async (values) => {
//       try {
//         const response = await axios.post(
//           "http://localhost:4000/api/auth/login",
//           { email_address: values.email, password: values.password }
//         );
//         console.log(response)
//         dispatch(loginUser(true))
//         localStorage.setItem("token", response.data.token);
//         navigate("/profile");
//       } catch (error) {
//         console.error("Login Error:", error.response?.data || error.message);
//         alert(error.response?.data?.message || "Login failed");
//       }
//     },
//   });

//   return (
//     <Grid
//       container
//       justifyContent="center"
//       alignItems="center"
//       style={{ minHeight: "100vh" }}
//     >
//       <Grid item xs={12} sm={8} md={4}>
//         <Box p={4} boxShadow={3} borderRadius={2} bgcolor="white">
//           <Typography variant="h4" component="h1" gutterBottom>
//             Login
//           </Typography>
//           <form onSubmit={formik.handleSubmit}>
//             <Box mb={3}>
//               <TextField
//                 fullWidth
//                 id="email"
//                 name="email"
//                 label="Email Address"
//                 value={formik.values.email}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 error={formik.touched.email && Boolean(formik.errors.email)}
//                 helperText={formik.touched.email && formik.errors.email}
//               />
//             </Box>
//             <Box mb={3}>
//               <TextField
//                 fullWidth
//                 id="password"
//                 name="password"
//                 label="Password"
//                 type="password"
//                 value={formik.values.password}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 error={
//                   formik.touched.password && Boolean(formik.errors.password)
//                 }
//                 helperText={formik.touched.password && formik.errors.password}
//               />
//             </Box>
//             <Link to="/RegistrationForm" style={{ color: "blue" }}>
//               Don't have an account? Register here
//             </Link>
//             <Button
//               color="primary"
//               variant="contained"
//               fullWidth
//               type="submit"
//               style={{ marginTop: "20px" }}
//             >
//               Login
//             </Button>
//           </form>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default LoginPage;





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

  // 🛠 Formik Setup
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
        const response = await axios.post("http://localhost:4000/api/auth/login", {
          email_address: values.email,
          password: values.password,
        });

        const { token, user } = response.data;

        // ✅ Redux में सही डेटा स्टोर करें
        dispatch(loginUser({ user, token }));

        // ✅ लोकल स्टोरेज में भी टोकन सेव करें
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
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
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
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Box>
            <Link to="/RegistrationForm" style={{ color: "blue" }}>
              Don't have an account? Register here
            </Link>
            <Button color="primary" variant="contained" fullWidth type="submit" style={{ marginTop: "20px" }}>
              Login
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;

