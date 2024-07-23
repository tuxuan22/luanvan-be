import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {
    let accessToken = req.headers.authorization?.split(' ')[1]
    if (!accessToken) return res.status(401).json({
        err: 1,
        msg: 'Thiếu access token'
    })
    jwt.verify(accessToken, process.env.SECRET_KEY, (err, user) => {
        if (err) return res.status(401).json({
            err: 1,
            msg: 'Access token không hợp lệ'
        })

        req.user = user

        if (user.role_id === 1) {
            req.isAdmin = true
        } else {
            req.isAdmin = false
        }
        next()
    })
}

export default verifyToken 