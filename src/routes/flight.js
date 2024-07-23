import express from 'express'
import * as flightController from '../controllers/flight'

const router = express.Router()

router.get('/all', flightController.getFlights)

router.get('/search', flightController.searchFlights)

router.post('/create-flight', flightController.createNewFlight)

router.put('/update-flight', flightController.updateFlight)

router.delete('/delete-flight', flightController.deleteFlight)





export default router