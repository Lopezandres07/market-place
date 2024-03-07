import { createUser } from '../Models/userModels.js'

const createNewUser = async (req, res) => {
  const { data } = req.body
  console.log(data)

  try {
    const newUser = await createUser(
      data.firstName,
      data.lastName,
      data.email,
      data.password,
      data.avatarURL
    )
    res.status(201).json({ success: true, newUser })
  } catch (error) {
    res.status(400).json(error.message)
  }
}

export { createNewUser }
