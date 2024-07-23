import express from 'express'
import * as airlineController from '../controllers/airline'

const router = express.Router()

router.get('/all', airlineController.getAirlines)


export default router