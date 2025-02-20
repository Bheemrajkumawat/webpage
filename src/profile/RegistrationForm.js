// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { TextField, Button, Box, Typography, Grid } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { registerUser } from "../Redux/Slice";

// const RegistrationForm = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     },
//     validationSchema: Yup.object({
//       firstName: Yup.string()
//         .max(15, "Must be 15 characters or less")
//         .required("First name is required"),
//       lastName: Yup.string()
//         .max(20, "Must be 20 characters or less")
//         .required("Last name is required"),
//       email: Yup.string()
//         .email("Invalid email address")
//         .required("Email is required"),
//       password: Yup.string()
//         .matches(/^[A-Za-z]/, "Password must start with a letter")
//         .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
//         .matches(/[a-z]/, "Password must contain at least one lowercase letter")
//         .min(8, "Password must be at least 8 characters long")
//         .required("Password is required"),
//       confirmPassword: Yup.string()
//         .oneOf([Yup.ref("password"), null], "Passwords must match")
//         .required("Confirm password is required"),
//     }),
//     onSubmit: (values) => {
//       console.log("Form data", values);
//       // Dispatch registration action
//       dispatch(registerUser({ name: values.firstName, email: values.email }));
//       alert("Registration Successful!");
//       navigate("/login");
//     },
//   });

//   return (
//     <Grid
//       container
//       justifyContent="center"
//       alignItems="center"
//       style={{ minHeight: "100vh" }}
//     >
//       <Grid item xs={12} sm={8} md={6}>
//         <Box p={4} boxShadow={3} borderRadius={2} bgcolor="white">
//           <Typography variant="h4" component="h1" gutterBottom>
//             Registration Form
//           </Typography>
//           <form onSubmit={formik.handleSubmit}>
//             <Box mb={3}>
//               <TextField
//                 fullWidth
//                 id="firstName"
//                 name="firstName"
//                 label="First Name"
//                 value={formik.values.firstName}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 error={
//                   formik.touched.firstName && Boolean(formik.errors.firstName)
//                 }
//                 helperText={formik.touched.firstName && formik.errors.firstName}
//               />
//             </Box>
//             <Box mb={3}>
//               <TextField
//                 fullWidth
//                 id="lastName"
//                 name="lastName"
//                 label="Last Name"
//                 value={formik.values.lastName}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 error={
//                   formik.touched.lastName && Boolean(formik.errors.lastName)
//                 }
//                 helperText={formik.touched.lastName && formik.errors.lastName}
//               />
//             </Box>
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
//             <Box mb={3}>
//               <TextField
//                 fullWidth
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 label="Confirm Password"
//                 type="password"
//                 value={formik.values.confirmPassword}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 error={
//                   formik.touched.confirmPassword &&
//                   Boolean(formik.errors.confirmPassword)
//                 }
//                 helperText={
//                   formik.touched.confirmPassword &&
//                   formik.errors.confirmPassword
//                 }
//               />
//             </Box>
//             <Button
//               color="primary"
//               variant="contained"
//               fullWidth
//               type="submit"
//             >
//               Register
//             </Button>
//           </form>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default RegistrationForm;

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegistrationForm = () => {
  const navigate = useNavigate();

  // Formik setup
  const formik = useFormik({
    initialValues: {
      firstName: "",  
      lastName: "",   
      email: "",      
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("First name is required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .matches(/^[A-Za-z]/, "Password must start with a letter")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .min(8, "Password must be at least 8 characters long")
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: async (values) => {
      try {
        // Send registration request to the backend
        const response = await axios.post("http://localhost:4000/api/auth/register", {
          firstname: values.firstName,    
          lastname: values.lastName,      
          email_address: values.email,   
          password: values.password,
        });
        console.log(response)
  
        // Redirect to login page after successful registration
        alert("Registration Successful!");
        navigate("/login");
      } catch (error) {
        console.error("Registration failed:", error);
        alert("Registration failed. Please try again.");
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
      <Grid item xs={12} sm={8} md={6}>
        <Box p={4} boxShadow={3} borderRadius={2} bgcolor="white">
          <Typography variant="h4" component="h1" gutterBottom>
            Registration Form
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Box mb={3}>
              <TextField
                fullWidth
                id="firstName"
                name="firstName"
                label="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Box>
            <Box mb={3}>
              <TextField
                fullWidth
                id="lastName"
                name="lastName"
                label="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Box>
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
            <Box mb={3}>
              <TextField
                fullWidth
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                helperText={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
              />
            </Box>
            <Button color="primary" variant="contained" fullWidth type="submit">
              Register
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default RegistrationForm;
