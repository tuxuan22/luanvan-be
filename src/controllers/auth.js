import * as authService from '../services/auth'

export const register = async (req, res) => {
    const { name, email, phone, password } = req.body
    try {
        if (!name || !email || !phone || !password) return res.status(400).json({
            err: 1,
            msg: 'Vui lòng nhập đầy đủ thông tin'
        })
        const response = await authService.registerService(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Có lỗi xảy ra: ' + error
        })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body
    try {
        if (!email || !password) return res.status(400).json({
            err: 1,
            msg: 'Vui lòng nhập đầy đủ thông tin'
        })
        const response = await authService.loginService(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Có lỗi xảy ra: ' + error
        })
    }
}