import pool from "../../../../config/db/conectionDb.js";

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

export { createProduct };
