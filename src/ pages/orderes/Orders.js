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
  Button,
  CircularProgress,
  Backdrop,
} from "@mui/material";
import { setOrders, cancelOrder, confirmOrder } from "../../Redux/Slice";
import { useNavigate } from "react-router-dom";
import "./Orders.css";

const Orders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const orders = useSelector((state) => state.orders.orders);

  const [loading, setLoading] = useState(true);
  const [loadingOrderId, setLoadingOrderId] = useState(null);
  const [confirmLoadingOrderId, setConfirmLoadingOrderId] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/orders");
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        const data = await response.json();
        dispatch(setOrders(data));
      } catch (err) {
        console.error("Error fetching orders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [dispatch]);

  const handleCancelOrder = (orderId) => {
    setLoadingOrderId(orderId);

    setTimeout(() => {
      dispatch(cancelOrder(orderId));
      setLoadingOrderId(null);
      navigate("/");
    }, 2000);
  };

  const handleConfirmOrder = (order) => {
    setConfirmLoadingOrderId(order._id);

    setTimeout(() => {
      dispatch(confirmOrder(order));
      setConfirmLoadingOrderId(null);
      navigate("/payment");
    }, 2000);
  };

  return (
    <div
      className={`orders-container ${
        loadingOrderId || confirmLoadingOrderId ? "blur-background" : ""
      }`}
    >
      <Typography variant="h4" gutterBottom className="orders-title">
        Your Orders
      </Typography>

      {loading && <CircularProgress size={50} />}

      {orders.length > 0 ? (
        <TableContainer component={Paper} className="orders-table">
          <Table>
            <TableHead>
              <TableRow className="table-header">
                <TableCell align="center">Order ID</TableCell>
                <TableCell align="center">Items</TableCell>
                <TableCell align="center">Total Price</TableCell>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order._id} className="order-row">
                  <TableCell align="center">{order._id}</TableCell>
                  <TableCell align="center">
                    {Array.isArray(order.items) && order.items.length > 0 ? (
                      order.items.map((item) => (
                        <div
                          key={item._id || `${order._id}-${item.title}`}
                          className="order-item"
                        >
                          <img
                            src={item.image || "default-image.jpg"}
                            alt={item.title || "No Title"}
                            className="order-image"
                          />
                          <div className="item-details">
                            <Typography variant="body1" className="item-title">
                              {item.title || "Unknown Item"}
                            </Typography>
                            <Typography variant="body2">
                              {item.quantity} x ₹
                              {item.price !== undefined ? item.price : "N/A"}
                            </Typography>
                          </div>
                        </div>
                      ))
                    ) : (
                      <Typography variant="body2" color="textSecondary">
                        No items
                      </Typography>
                    )}
                  </TableCell>
                  <TableCell align="center">₹{order.totalPrice ?? 0}</TableCell>
                  <TableCell align="center">
                    {order.date ? new Date(order.date).toLocaleString() : "N/A"}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => handleCancelOrder(order._id)}
                      disabled={loadingOrderId === order._id}
                    >
                      {loadingOrderId === order._id
                        ? "Cancelling..."
                        : "Cancel Order"}
                    </Button>

                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={() => handleConfirmOrder(order)}
                      style={{ marginLeft: "10px" }}
                      disabled={confirmLoadingOrderId === order._id}
                    >
                      {confirmLoadingOrderId === order._id
                        ? "Processing..."
                        : "Confirm Order"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography variant="h6" className="no-orders">
          No orders found.
        </Typography>
      )}

      {(loadingOrderId || confirmLoadingOrderId) && (
        <Backdrop open={true} className="full-page-loader">
          <CircularProgress size={60} sx={{ color: "#fff" }} />
        </Backdrop>
      )}
    </div>
  );
};

export default Orders;
