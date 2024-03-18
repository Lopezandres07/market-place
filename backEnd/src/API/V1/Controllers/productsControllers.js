import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../../../API/V1/Models/productsModels.js";

const getAllProductsController = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error en el controlador", error);
    res.status(500).send("Error interno del servidor");
  }
};

const createNewProduct = async (req, res) => {
  try {
    const { product } = req.body;
    const adminRoleId = 1;
    product.role_id = adminRoleId;

    const newProduct = await createProduct(product);
    res.status(201).json({ product: newProduct });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const removeProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    console.log("ID recibido en el servidor:", productId);
    const deletedProduct = await deleteProduct(productId);
    res.status(200).json({
      message: "Producto eliminado exitosamente",
      product: deletedProduct,
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateProductController = async (req, res) => {
  try {
    const { productId } = req.params;
    const { name, description, price, imageURL } = req.body;

    const updatedProduct = await updateProduct(productId, {
      name,
      description,
      price,
      imageURL,
    });
    console.log(updateProduct);

    res.status(200).json({
      message: "Producto actualizado exitosamente",
      product: updatedProduct,
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
export {
  createNewProduct,
  removeProduct,
  getAllProductsController,
  updateProductController,
};
