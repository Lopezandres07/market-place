import pool from "../../../../config/db/conectionDb.js";

const getAllProducts = async () => {
  try {
    const result = await pool.query("SELECT * FROM products");
    return result.rows;
  } catch (error) {
    console.error("Error en la consulta", error);
    throw error;
  }
};

const createProduct = async ({
  user_id,
  name,
  description,
  price,
  imageURL,
}) => {
  const SQLquery = {
    text: "INSERT INTO products (user_id, name, description, price, imageURL) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    values: [user_id, name, description, price, imageURL],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const deleteProduct = async (productsId) => {
  const SQLquery = {
    text: "DELETE FROM products WHERE id = $1 RETURNING *",
    values: [productsId],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

const updateProduct = async (productId, { name, description, price }) => {
  const SQLquery = {
    text: "UPDATE products SET name = $1, description = $2, price = $3 WHERE id = $4 RETURNING *",
    values: [name, description, price, productId],
  };
  console.log(SQLquery);

  const response = await pool.query(SQLquery);
  return response.rows[0];
};

export { createProduct, deleteProduct, getAllProducts, updateProduct };
