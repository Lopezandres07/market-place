import express from 'express'
import { createNewUser } from '../../src/api/v1/Controllers/userControllers.js'

const router = express.Router()

router.post('/register', createNewUser)

export default router
