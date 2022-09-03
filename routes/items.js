import express from "express";
import {
  createItem,
  deleteItem,
  getItem,
  getItemByKey,
  getItems,
  updateItem,
} from "../controllers/item.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createItem);
//UPDATE
router.put("/:id", verifyAdmin, updateItem);
//DELETE
router.delete("/:id", verifyAdmin, deleteItem);
//GET
router.get("/find/:id", getItem);
//GET
router.get("/findByKey/:key", getItemByKey);
//GET ALL
router.get("/", getItems);

export default router;
