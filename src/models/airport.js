'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Airport extends Model {
        static associate(models) {
            Airport.hasOne(models.Flight, { as: 'departureFlights', foreignKey: 'departure_airport_id' })
            Airport.hasOne(models.Flight, { as: 'arrivalFlights', foreignKey: 'arrival_airport_id' })
        }
    }
    Airport.init({
        code: DataTypes.STRING,
        name: DataTypes.STRING,
        city: DataTypes.STRING,
        country: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Airport',
    })
    return Airport
}
