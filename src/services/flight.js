const { Op } = require('sequelize')
import db from '../models'

export const getFlightsService = () => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Flight.findAll({
            raw: true,
            nest: true,
            include: [
                { model: db.Airport, as: 'departureAirport' },
                { model: db.Airport, as: 'arrivalAirport' },
                { model: db.Airline, as: 'airline' }
            ],

            // attributes: ['id', 'departure_airport_id', 'arrival_airport_id', 'departure_time', 'arrival_time']
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

export const searchFlightService = (query) => new Promise(async (resolve, reject) => {
    try {
        // Tạo phạm vi thời gian cho một ngày cụ thể
        const startOfDay = new Date(query.departure_time);
        startOfDay.setHours(0, 0, 0, 0); // Đặt thời gian bắt đầu từ đầu ngày
        const endOfDay = new Date(query.departure_time);
        endOfDay.setHours(23, 59, 59, 999); // Đặt thời gian kết thúc đến cuối ngày

        const response = await db.Flight.findAndCountAll({
            where: {
                ...query,
                departure_time: {
                    [Op.between]: [startOfDay, endOfDay]
                }
            },
            raw: true,
            nest: true,
            include: [
                { model: db.Airport, as: 'departureAirport' },
                { model: db.Airport, as: 'arrivalAirport' },
                { model: db.Airline, as: 'airline' }
            ],


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


export const createNewFlightsService = (body) => new Promise(async (resolve, reject) => {
    try {
        await db.Flight.create({
            number: body.number || null,
            departure_airport_id: body.departure_airport_id || null,
            arrival_airport_id: body.arrival_airport_id || null,
            departure_time: body.departure_time || null,
            arrival_time: body.arrival_time || null,
            price: body.price || null,
            seat_capcity: body.seat_capcity || null,
            class_name: body.class_name || null,
            airline_id: body.airline_id || null,
        })
        resolve({
            err: 0,
            msg: 'ok',
        })
    } catch (error) {
        reject(error)
    }
})

export const updateFlightService = (id, ...body) => new Promise(async (resolve, reject) => {
    try {

        await db.Flight.update({
            number: body[0].number,
            departure_airport_id: body[0].departure_airport_id,
            arrival_airport_id: body[0].arrival_airport_id,
            departure_time: body[0].departure_time,
            arrival_time: body[0].arrival_time,
            price: body[0].price,
            seat_capcity: body[0].seat_capcity,
            class_name: body[0].class_name,
            airline_id: body[0].airline_id,
        }, {
            where: { id: id }
        })

        resolve({
            err: 0,
            msg: 'updated',
        })
    } catch (error) {
        reject(error)
    }
})

export const deleteFlightService = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Flight.destroy({
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