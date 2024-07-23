import express from 'express'
import * as airportController from '../controllers/airport'

const router = express.Router()

router.get('/all', airportController.getAirports)


export default router