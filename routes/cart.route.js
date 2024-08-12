import express, { response } from "express";
import { v4 as uuidv4 } from "uuid";
// import { Products } from "../entities/products.entity.js";
// import { auth } from "../middleware/auth.middleware.js";
import {
  getAllCartProductsCtr,
  createCartProductsCtr,
  deleteCartProductsCtr,
} from "../controllers/cart.controller.js";
import { getProductById } from "../services/product.services.js";

const router = express.Router();

router.get("/:id", getAllCartProductsCtr);
router.post("/", createCartProductsCtr);
router.delete("/:id", deleteCartProductsCtr);

// router.get("/:id", getMoviebyIdCtr);

// router.delete("/:id", deleteMovieCtr);

// router.post("/", createMovieCtr);

// router.put("/:id", updateMovieCtr);

export default router;
