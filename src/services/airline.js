import db from '../models'

export const getAirlinesService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Airline.findAll({

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