import express from 'express'
import {AuthController} from '@controllers/v1/AuthController'

const router = express.Router()
const auth = new AuthController()

router.post('/signup', auth.signup)
router.post('/login', auth.login)

export default router