import { createProduct } from "../../../API/V1/Models/productsModels.js";

const createNewProduct = async (req, res) => {
  try {
    const { product } = req.body;
    const newProduct = await createProduct(product);
    res.status(201).json({ product: newProduct });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export { createNewProduct };
