import express, { response } from "express";
import { v4 as uuidv4 } from "uuid";
// import { auth } from "../middleware/auth.middleware.js";
import {
  getAllOrderProductsCtr,
  createOrderProductsCtr,
} from "../controllers/orders.controller.js";

const router = express.Router();

router.get("/:id", getAllOrderProductsCtr);
router.post("/:id", createOrderProductsCtr);

export default router;
