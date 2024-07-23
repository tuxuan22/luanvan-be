import * as services from '../services/test'




export const getTest = async (req, res) => {
    try {
        let id = req.query.id
        const response = await services.getTestsService(id)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Có lỗi xảy ra:' + error
        })
    }
}


