import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { setOrderHistory } from "../../Redux/Slice";

const OrderHistory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const orderHistory = useSelector((state) => state.orders.orderHistory);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/orders");
        if (!response.ok) {
          throw new Error("Failed to fetch order history");
        }
        const data = await response.json();
        dispatch(setOrderHistory(data));
      } catch (err) {
        console.error("Error fetching order history:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderHistory();
  }, [dispatch]);

  return (
    <div style={{ marginTop: "40px", padding: "300px" }}>
      <Typography variant="h4" gutterBottom>
        Order History
      </Typography>

      {loading ? (
        <Typography variant="h6" align="center">
          Loading...
        </Typography>
      ) : orderHistory.length > 0 ? (
        <TableContainer component={Paper} style={{ padding: "20px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Order ID</TableCell>
                <TableCell align="center">Items</TableCell>
                <TableCell align="center">Total Price</TableCell>
                <TableCell align="center">Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderHistory.map((order) => (
                <TableRow key={order._id}>
                  <TableCell align="center">{order._id}</TableCell>
                  <TableCell align="center">
                    {order.items.map((item, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <img
                          src={item.image || "default-image.jpg"}
                          alt={item.title || "No Title"}
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "5px",
                          }}
                        />
                        <Typography variant="body1">
                          {item.title} ({item.quantity} x ₹{item.price ?? 0})
                        </Typography>
                      </div>
                    ))}
                  </TableCell>
                  <TableCell align="center">₹{order.totalPrice ?? 0}</TableCell>
                  <TableCell align="center">
                    {new Date(order.date).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography variant="h6" align="center" style={{ marginTop: "20px" }}>
          No past orders found.
        </Typography>
      )}
      <button
        style={{
          color: "black",
          background: "gray",
          padding: "10px",
          marginTop: "20px",
        }}
        onClick={() => navigate("/")}
      >
        Back
      </button>
    </div>
  );
};

export default OrderHistory;
