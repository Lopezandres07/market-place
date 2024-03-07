import express from "express";
import { createNewProduct } from "../../src/API/V1/Controllers/productsControllers.js";

const router = express.Router();

router.post("/products", createNewProduct);

export default router;
