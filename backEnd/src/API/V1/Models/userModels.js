import pool from "../../../../config/db/conectionDb.js";
import bcrypt from "bcryptjs";

const createUser = async (data) => {
  const { firstName, lastName, email, password, avatarURL, role_id = 2 } = data;

  const hashedPasword = bcrypt.hashSync(password);

  const SQLquery = {
    text: "INSERT INTO users (firstName, lastName, email, password, avatarURL, role_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    values: [firstName, lastName, email, hashedPasword, avatarURL, role_id],
  };
  const response = await pool.query(SQLquery);

  return response.rows[0];
};

const createGoogleUser = async (data) => {
  const {
    firstName = data.given_name,
    lastName = data.family_name,
    email,
    password = data.sub,
    avatarURL = data.picture,
    role_id = 2,
  } = data;

  const hashedPasword = bcrypt.hashSync(password);

  const SQLquery = {
    text: "INSERT INTO users (firstName, lastName, email, password, avatarURL, role_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    values: [firstName, lastName, email, hashedPasword, avatarURL, role_id],
  };

  const response = await pool.query(SQLquery);

  return response.rows[0];
};

const byEmail = async ({ email }) => {
  const SQLquery = {
    text: "SELECT * FROM users WHERE email = $1",
    values: [email],
  };

  const response = await pool.query(SQLquery);

  return response.rows[0];
};

export { createUser, createGoogleUser, byEmail };
