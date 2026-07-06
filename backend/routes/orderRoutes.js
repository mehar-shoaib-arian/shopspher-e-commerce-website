import express from "express";
import {
  createOrder,
  getAllOrders,
  getMyOrders,
  getOrderAnalytics,
  getOrderById,
  updateOrderStatus,
} from "../controllers/orderController.js";
import { adminOnly, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createOrder);
router.get("/my-orders", protect, getMyOrders);
router.get("/analytics/summary", protect, adminOnly, getOrderAnalytics);
router.get("/", protect, adminOnly, getAllOrders);
router.get("/:id", protect, getOrderById);
router.put("/:id/status", protect, adminOnly, updateOrderStatus);

export default router;
