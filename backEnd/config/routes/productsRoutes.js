import express from "express";
import {
  createNewProduct,
  getAllProductsController,
  removeProduct,
} from "../../src/API/V1/Controllers/productsControllers.js";

const router = express.Router();

router.get("/products", getAllProductsController);
router.post("/products", createNewProduct);
router.delete("/products/:productId", removeProduct);

export default router;
