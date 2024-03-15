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

const updateUser = async (userId, userDataToUpdate) => {
  const { firstName, lastName, email, avatarURL } = userDataToUpdate

  const query = {
    text: 'UPDATE users SET first_name = $1, last_name = $2, email = $3, avatar_url = $4 WHERE id = $5 RETURNING *',
    values: [firstName, lastName, email, avatarURL, userId],
  }

  try {
    const { rows } = await pool.query(query)
    return rows[0] // Devuelve el usuario actualizado
  } catch (error) {
    console.error('Error en updateUserProfile modelo:', error)
    throw new Error('Error al actualizar el perfil del usuario')
  }
}

export { createUser, createGoogleUser, byEmail, getUserById, updateUser }
