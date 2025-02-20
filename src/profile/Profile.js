// import React from "react";
// import "./Loginpage/Profile.css";

// import { Avatar, Box, Button, Card, Typography } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { logoutUser } from "../Redux/Slice";

// const Profile = () => {
//   const user = useSelector((state) => state.user.user);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     dispatch(logoutUser());
//     navigate("/login");
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "100vh",
//         backgroundColor: "#f0f4f8",
//       }}
//     >
//       <Card
//         sx={{
//           width: 400,
//           textAlign: "center",
//           padding: "2rem",
//           boxShadow: 3,
//           borderRadius: "10px",
//         }}
//       >
//         <Avatar
//           sx={{
//             width: 100,
//             height: 100,
//             margin: "0 auto",
//             backgroundColor: "#1976d2",
//             fontSize: "2rem",
//           }}
//         >
//           {user.name.charAt(0).toUpperCase()}
//         </Avatar>
//         <Typography  className="name"   variant="h5" sx={{ mt: 2 }}>
//           {user.name}
//         </Typography>
//         <Typography  className="email" variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//           {user.email}
//         </Typography>
//         <Button
//           className="but"
//           variant="contained"
//           color="error"
//           onClick={handleLogout}
//         >
//           Logout
//         </Button>
//       </Card>
//     </Box>
//   );
// };

// export default Profile;
// import React, { useEffect, useState } from "react";
// import { Avatar, Box, Button, Card, Typography, CircularProgress } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./Loginpage/Profile.css";

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null); 
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         console.log(`hii token ${token}`)
//         if (!token) {
//           // Redirect if no token is present
//           navigate("/login"); 
//           return;
//         }
//         const { data } = await axios.get("http://localhost:4000/api/auth/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         console.log("Fetched User Data:", data);
//         setUser(data || {});
//         // Set loading to false after data is fetched
//         setLoading(false); 
//       } catch (error) {
//         console.error("Error fetching profile:", error);
//         setError("Failed to load profile.");
//         setLoading(false);
//       }
//     };
//     fetchProfile();
//   }, [navigate]);

//   const handleLogout = () => {
//     // Remove token from localStorage
//     localStorage.removeItem("token"); 
//     // Redirect to login page
//     navigate("/login"); 
//   };

//   if (loading) {
//     return (
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           minHeight: "100vh",
//         }}
//       >
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           minHeight: "100vh",
//         }}
//       >
//         <Typography variant="h6" color="error">
//           {error}
//         </Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "100vh",
//         backgroundColor: "#f0f4f8",
//       }}
//     >
//       <Card
//         sx={{
//           width: 400,
//           textAlign: "center",
//           padding: "2rem",
//           boxShadow: 3,
//           borderRadius: "10px",
//         }}
//       >
//         <Avatar
//           sx={{
//             width: 100,
//             height: 100,
//             margin: "0 auto",
//             backgroundColor: "#1976d2",
//             fontSize: "2rem",
//           }}
//         >
//          {user?.firstname?.charAt(0)?.toUpperCase() || "U"}
//         </Avatar>
//         <Typography className="name" variant="h5" sx={{ mt: 2 }}>
//           {/* {user.name} */}
//           {user?.firstname || "Unknown User"} {user?.lastname || ""}
//         </Typography>
//         <Typography className="email" variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//           {/* {user.email} */}
//           {user?.email_address || "No Email Available"}
//         </Typography>
//         <Button
//           className="but"
//           variant="contained"
//           color="error"
//           onClick={()=>handleLogout()}
//         >
//           Logout
//         </Button>
//       </Card>
//     </Box>
//   );
// };

// export default Profile;

import React, { useEffect, useState } from "react";
import { Avatar, Box, Button, Card, Typography, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logoutUser, loginUser } from "../Redux/Slice";
import "./Loginpage/Profile.css";

const Profile = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        const { data } = await axios.get("http://localhost:4000/api/auth/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser(data || {});
        localStorage.setItem("user", JSON.stringify(data));  // 🔹 यूज़र डेटा लोकल स्टोरेज में सेव करें
        dispatch(loginUser({ user: data, token })); // 🔹 Redux स्टेट अपडेट करें
        setLoading(false);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError("Failed to load profile.");
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate, dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); // 🔹 यूज़र डेटा भी हटाएँ
    dispatch(logoutUser());  // 🔹 Redux स्टेट रीसेट करें
    navigate("/login");
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
        <Typography variant="h6" color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f0f4f8" }}>
      <Card sx={{ width: 400, textAlign: "center", padding: "2rem", boxShadow: 3, borderRadius: "10px" }}>
        <Avatar sx={{ width: 100, height: 100, margin: "0 auto", backgroundColor: "#1976d2", fontSize: "2rem" }}>
          {user?.firstname?.charAt(0)?.toUpperCase() || "U"}
        </Avatar>
        <Typography className="name" variant="h5" sx={{ mt: 2 }}>
          {user?.firstname || "Unknown User"} {user?.lastname || ""}
        </Typography>
        <Typography className="email" variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {user?.email_address || "No Email Available"}
        </Typography>
        <Button className="but" variant="contained" color="error" onClick={handleLogout}>
          Logout
        </Button>
      </Card>
    </Box>
  );
};

export default Profile;
