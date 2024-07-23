import * as flightService from '../services/flight'

export const getFlights = async (req, res) => {
    try {
        const response = await flightService.getFlightsService()
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Có lỗi xảy ra:' + error
        })
    }
}

export const searchFlights = async (req, res) => {
    const { ...query } = req.query
    try {
        const response = await flightService.searchFlightService(query)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Có lỗi xảy ra:' + error
        })
    }
}

export const createNewFlight = async (req, res) => {
    try {
        const response = await flightService.createNewFlightsService(req.body)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Có lỗi xảy ra:' + error
        })
    }
}

export const updateFlight = async (req, res) => {
    const { id } = req.body
    try {

        if (!id) return res.status(400).json({
            err: 1,
            msg: 'Vui lòng nhập đầy đủ thông tin'
        })
        const response = await flightService.updateFlightService(id, req.body)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Có lỗi xảy ra:' + error
        })
    }
}

export const deleteFlight = async (req, res) => {
    const { id } = req.query

    try {
        if (!id) return res.status(400).json({
            err: 1,
            msg: 'Vui lòng nhập đầy đủ thông tin'
        })
        const response = await flightService.deleteFlightService(id)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Có lỗi xảy ra:' + error
        })
    }
}

