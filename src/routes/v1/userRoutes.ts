import express from 'express'
import {UserController} from '@controllers/v1/UserController'

const router = express.Router()
const user = new UserController()

router.post('/user', user.createOne)
router.get('/user/:id', user.getOne)
router.put('/user/:id', user.updateOne)
router.delete('/user/:id', user.deleteOne)
router.get('/user', user.getAll)

export default router