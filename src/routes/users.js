import express from 'express'
import * as userController from '../controllers/user'

const router = express.Router()

router.get('/all', userController.getUsers)

router.delete('/delete-user', userController.deleteUser)


export default router