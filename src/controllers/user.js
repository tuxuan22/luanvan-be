import * as services from '../services/user'

export const getCurrent = async (req, res) => {
    const { id } = req.user
    try {
        const response = await services.getOne(id)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Có lỗi xảy ra: ' + error
        })
    }
}


export const getUsers = async (req, res) => {
    try {
        let id = req.query.id
        const response = await services.getUsersService(id)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Có lỗi xảy ra:' + error
        })
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.query

    try {
        if (!id) return res.status(400).json({
            err: 1,
            msg: 'Vui lòng nhập đầy đủ thông tin'
        })
        const response = await services.deleteUserService(id)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Có lỗi xảy ra:' + error
        })
    }
}
