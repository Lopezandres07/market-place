import express from 'express'
import {
  createNewUser,
  loginUser,
} from '../../src/api/v1/Controllers/userControllers.js'
import { validateParametersUser } from '../../middlewares/validateParamsUser.js'

const router = express.Router()

router.post('/register', validateParametersUser, createNewUser)
router.post('/login', /* middleware */ loginUser)

export default router
