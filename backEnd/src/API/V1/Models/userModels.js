import pool from '../../../../config/db/conectionDb.js'
import bcrypt from 'bcryptjs'

const createUser = async (data) => {
  const { firstName, lastName, email, password, avatarURL, role_id = 2 } = data // See README

  const hashedPasword = bcrypt.hashSync(password)

  const SQLquery = {
    text: 'INSERT INTO users (firstName, lastName, email, password, avatarURL, role_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    values: [firstName, lastName, email, hashedPasword, avatarURL, role_id],
  }
  const response = await pool.query(SQLquery)

  return response.rows[0]
}

const createGoogleUser = async (data) => {
  const {
    firstName = data.given_name,
    lastName = data.family_name,
    email,
    password = data.sub,
    avatarURL = data.picture,
    role_id = 2, // // See README
  } = data

  const hashedPasword = bcrypt.hashSync(password)

  const SQLquery = {
    text: 'INSERT INTO users (firstName, lastName, email, password, avatarURL, role_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    values: [firstName, lastName, email, hashedPasword, avatarURL, role_id],
  }

  const response = await pool.query(SQLquery)

  return response.rows[0]
}

const byEmail = async ({ email }) => {
  const SQLquery = {
    text: 'SELECT * FROM users WHERE email = $1',
    values: [email],
  }

  const response = await pool.query(SQLquery)
  return response.rows[0]
}

const getUserById = async (id) => {
  const SQLquery = {
    text: 'SELECT * FROM users WHERE id = $1',
    values: [id],
  }

  const response = await pool.query(SQLquery)
  return response.rows[0]
}

const updateUser = async (id, data) => {
  const { firstName, lastName, email, password, avatarURL } = data

  const hashedPasword = bcrypt.hashSync(password)

  const SQLquery = {
    text: 'UPDATE users SET first_name = $1, last_name = $2, email = $3, password = $4 avatar_url = $5 WHERE id = $6 RETURNING *',
    values: [firstName, lastName, email, hashedPasword, avatarURL, id],
  }

  const response = await pool.query(SQLquery)
  return response.rows[0]
}

export { createUser, createGoogleUser, byEmail, getUserById, updateUser }
