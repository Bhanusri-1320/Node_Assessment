import express, { response } from "express";
import { v4 as uuidv4 } from "uuid";
// import { Products } from "../entities/products.entity.js";
// import { auth } from "../middleware/auth.middleware.js";
import {
  getAllProductsCtr,
  createProductsCtr,
  getProductByIdCtr,
  deleteProductsCtr,
  updateProductCtr,
  // getMoviebyIdCtr,
  // deleteMovieCtr,
  // createMovieCtr,
  // updateMovieCtr,
} from "../controllers/products.controller.js";
import { getProductById } from "../services/product.services.js";

const router = express.Router();

router.get("/", getAllProductsCtr);
router.get("/:id", getProductByIdCtr);
router.post("/", createProductsCtr);
router.delete("/:id", deleteProductsCtr);
router.put("/:id", updateProductCtr);

// router.get("/:id", getMoviebyIdCtr);

// router.delete("/:id", deleteMovieCtr);

// router.post("/", createMovieCtr);

// router.put("/:id", updateMovieCtr);

export default router;
