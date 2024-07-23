import * as airportService from '../services/airport'

export const getAirports = async (req, res) => {
    try {
        const response = await airportService.getAirportsService()
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Có lỗi xảy ra:' + error
        })
    }
}