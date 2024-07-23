import db from '../models'

//get current user
export const getOne = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where: { id },

            attributes: {
                exclude: ['password']
            }
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'ok' : 'error',
            response
        })
    } catch (error) {
        reject(error)
    }
})

export const getUsersService = (id) => new Promise(async (resolve, reject) => {
    try {
        let query = {}
        if (id) {
            query = { where: { id } }
            const response = await db.User.findOne({
                ...query,

                attributes: {
                    exclude: ['password']
                }
            })
            return resolve({
                err: response ? 0 : 1,
                msg: response ? 'ok' : 'error',
                response
            })
        }
        const response = await db.User.findAll({

            nest: true,
            attributes: {
                exclude: ['password']
            }
        })
        return resolve({
            err: response ? 0 : 1,
            msg: response ? 'ok' : 'error',
            response
        })

    } catch (error) {
        reject(error)
    }
})

export const deleteUserService = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.destroy({
            where: { id: id },


        })
        resolve({
            err: response > 0 ? 0 : 1,
            msg: response > 0 ? 'ok' : 'error',
            response
        })
    } catch (error) {
        reject(error)
    }
})