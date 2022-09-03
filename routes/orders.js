import express from "express";
import {
  createOrder,
  deleteOrder,
  getOrder,
  getOrders,
  updateOrder,
} from "../controllers/order.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createOrder);
//UPDATE
router.put("/:id", verifyAdmin, updateOrder);
//DELETE
router.delete("/:id", verifyAdmin, deleteOrder);
//GET
router.get("/find/:id", getOrder);
//GET ALL
router.get("/", getOrders);

export default router;
