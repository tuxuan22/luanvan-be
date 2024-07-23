import db from '../models'

export const getAirportsService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Airport.findAll({

            nest: true,
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