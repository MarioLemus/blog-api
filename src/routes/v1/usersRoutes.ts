import express from 'express'
import {UsersControllers} from '@controllers/v1/UsersControllers'

const router = express.Router()
const user = new UsersControllers()

router.post('/user', user.createOne)
router.get('/users', user.getAll)
router.get('/user/:id', user.getOne)
router.put('/user/:id', user.updateOne)
router.delete('/user/:id', user.deleteOne)

export default router