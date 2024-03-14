import express from "express";
import {
  createNewProduct,
  getAllProductsController,
  removeProduct,
} from "../../src/API/V1/Controllers/productsControllers.js";
import { authUser } from "../../middlewares/authUser.js";

const router = express.Router();

router.get("/products", authUser, getAllProductsController); // Protegida por autenticación
router.post("/products", authUser, createNewProduct); // Protegida por autenticación
router.delete("/products/:productId", authUser, removeProduct); // Protegida por autenticación

export default router;
