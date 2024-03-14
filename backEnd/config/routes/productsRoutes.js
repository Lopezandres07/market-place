import express from "express";
import {
  createNewProduct,
  getAllProductsController,
  removeProduct,
  updateProductController,
} from "../../src/API/V1/Controllers/productsControllers.js";
import { authUser } from "../../middlewares/authUser.js";

const router = express.Router();

router.get("/products", getAllProductsController); // Protegida por autenticación
router.post("/products", createNewProduct); // Protegida por autenticación
router.delete("/products/:productId", removeProduct); // Protegida por autenticación
router.put("/products/:productId", updateProductController);

export default router;
