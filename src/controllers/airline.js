import * as airlineService from '../services/airline'

export const getAirlines = async (req, res) => {
    try {
        const response = await airlineService.getAirlinesService()
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Có lỗi xảy ra:' + error
        })
    }
}