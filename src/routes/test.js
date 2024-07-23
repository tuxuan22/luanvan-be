import express from 'express'
import * as testController from '../controllers/test'

const router = express.Router()

router.get('/all', testController.getTest)


export default router