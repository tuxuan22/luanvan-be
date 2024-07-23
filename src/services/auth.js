import db from '../models'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
require('dotenv').config()

const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10))

export const registerService = ({ email, phone, password, name }) => new Promise(async (resolve, reject) => {
    try {
        const existingEmail = await db.User.findOne({ where: { email } })
        if (existingEmail) {
            return resolve({
                err: 2,
                msg: 'Email đã được sử dụng',
                token: null
            })
        }



        // Create the new user
        const response = await db.User.create({
            email,
            phone,
            name,
            password: hashPassword(password)
        })

        // Generate a token for the new user
        const token = jwt.sign(
            { id: response.id, email: response.email, phone: response.phone },
            process.env.SECRET_KEY,
            { expiresIn: '2d' }
        )

        resolve({
            err: 0,
            msg: 'Đăng ký thành công',
            token
        })
    } catch (error) {
        reject(error)
    }
})

export const loginService = ({ email, password }) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where: { email },


        })
        const isCorrectPassword = response && bcrypt.compareSync(password, response.password)
        const token = isCorrectPassword && jwt.sign(
            { id: response.id, email: response.email, roleId: response.roleId },
            process.env.SECRET_KEY,
            { expiresIn: '2d' })
        resolve({
            err: token ? 0 : 2,
            msg: token ? 'Đăng nhập thành công' : response ? 'Sai mật khẩu' : 'Sai địa chỉ email',
            token: token || null
        })
    } catch (error) {
        reject(error)
    }
})