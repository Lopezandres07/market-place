import {
  byEmail,
  createGoogleUser,
  createUser,
  updateUser,
} from '../Models/userModels.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const createNewUser = async (req, res) => {
  const { data } = req.body

  try {
    const newUser = await createUser(data)

    res.status(201).json({ success: true, newUser })
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const loginUser = async (req, res) => {
  const { data } = req.body

  try {
    const findUser = await byEmail(data)

    if (!findUser) {
      res.status(500).json({ error: 'User not found' })
    } else {
      const validPassword = bcrypt.compareSync(data.password, findUser.password)

      if (!validPassword) {
        res.status(500).json({ error: 'Invalid password' })
      } else {
        console.log(findUser)

        const { id, email, password, firstname, lastname, avatarurl, role_id } =
          findUser

        const token = jwt.sign({ email }, process.env.JWT_SECRET, {
          expiresIn: '1h',
        })

        res.status(200).json({
          message: `Welcome ${firstname} ${lastname}, you have logged in`,
          code: 200,
          token,
          userData: {
            id,
            email,
            password,
            firstname,
            lastname,
            avatarurl,
            role_id,
          },
        })
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const handleNewUser = async (res, newUser) => {
  const { id, email, password, firstname, lastname, avatarurl, role_id } =
    newUser

  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  })

  res.status(200).json({
    message: `Bienvenido ${firstname} ${lastname}, has iniciado sesion`,
    code: 200,
    token,
    userData: { id, email, password, firstname, lastname, avatarurl, role_id },
  })
}

const googleLogin = async (req, res) => {
  const { data } = req.body

  try {
    const findUser = await byEmail(data)

    if (!findUser) {
      try {
        const newUser = await createGoogleUser(data)
        await handleNewUser(res, newUser)
      } catch (error) {
        res.status(400).json(error.message)
      }
    } else {
      const validPassword = bcrypt.compareSync(data.sub, findUser.password)

      if (!validPassword) {
        res.status(500).json({ error: error.message })
      } else {
        console.log(findUser)

        const { id, email, password, firstname, lastname, avatarurl, role_id } =
          findUser
        const token = jwt.sign({ email }, process.env.JWT_SECRET, {
          expiresIn: '1h',
        })
        res.status(200).json({
          message: `Bienvenido ${firstname} ${lastname}, has iniciado sesion`,
          code: 200,
          token,
          userData: {
            id,
            email,
            password,
            firstname,
            lastname,
            avatarurl,
            role_id,
          },
        })
      }
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const uploadAvatar = async (req, res) => {
  try {
    const fileUrl =
      req.protocol + '://' + req.get('host') + '/uploads/' + req.file.filename
    res.status(200).json({ fileUrl })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const updateUserProfile = async (req, res) => {
  const { id } = req.params
  const { newData } = req.body

  try {
    const userUpdated = await updateUser(id, newData)
    console.log('new user: ', userUpdated)

    res.status(200).json({ success: true, userUpdated })
  } catch (error) {
    console.error('Error al actualizar el perfil:', error)
    res
      .status(500)
      .json({ success: false, message: 'Error al actualizar el perfil' })
  }
}

export {
  createNewUser,
  loginUser,
  googleLogin,
  uploadAvatar,
  updateUserProfile,
}
