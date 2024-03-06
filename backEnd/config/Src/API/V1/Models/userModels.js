import pool from "../../../../db/conectionDb";
import bcrypt from "bcryptjs";

const createUser = async ({
  role_id,
  firstName,
  lastName,
  avatarURL,
  email,
  password,
}) => {
  const hashedPasword = bcrypt.hashSync(password);

  const SQLquery = {
    text: "INSERT INTO users (role_id, firstName, lastName, avatarURL, email, password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    values: [1, "John", "Doe", "avatar.jpg", "john.doe@example.com", "123456"],
  };
  const response = await pool.query(SQLquery);
  return response.rows[0];
};

export { createUser };
