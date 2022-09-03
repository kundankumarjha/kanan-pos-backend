import express from "express";
import {
  createCustomer,
  deleteCustomer,
  getCustomer,
  getCustomerByPhone,
  getCustomers,
  updateCustomer,
} from "../controllers/customer.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createCustomer);
//UPDATE
router.put("/:id", verifyAdmin, updateCustomer);
//DELETE
router.delete("/:id", verifyAdmin, deleteCustomer);
//GET
router.get("/find/:id", getCustomer);
//GET
router.get("/findByPhone/:key", getCustomerByPhone);
//GET ALL
router.get("/", getCustomers);

export default router;
