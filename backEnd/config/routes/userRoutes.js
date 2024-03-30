import express from 'express'
import multer from 'multer'
import {
  createNewUser,
  googleLogin,
  loginUser,
  updateUserProfile,
  uploadAvatar,
} from '../../../backEnd/src//API/V1/Controllers/userControllers.js'
import { validateParametersUser } from '../../middlewares/validateParamsUser.js'
import { validparameters } from '../../middlewares/validateParametersLogin.js'

const router = express.Router()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    const ext = file.originalname.split('.').pop()
    cb(null, uniqueSuffix + '.' + ext)
  },
})

const upload = multer({ storage: storage })

router.post('/register', validateParametersUser, createNewUser)
router.post('/login', validparameters, loginUser)
router.post('/googleLogin', googleLogin)
router.put('/user/:id', updateUserProfile)
router.post('/uploadAvatar', upload.single('avatar'), uploadAvatar)

export default router
