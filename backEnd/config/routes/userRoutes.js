import express from 'express'
import {
  createNewUser,
  getUserById,
  googleLogin,
  loginUser,
} from '../../src/api/v1/Controllers/userControllers.js'
import { validateParametersUser } from '../../middlewares/validateParamsUser.js'
import { validparameters } from '../../middlewares/validateParametersLogin.js'

const router = express.Router()

router.post('/register', validateParametersUser, createNewUser)
router.post('/login', validparameters, loginUser)
router.post('/googleLogin', googleLogin)
router.get('/users/:id', getUserById)

export default router
