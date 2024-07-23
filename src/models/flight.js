'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Flight extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Flight.belongsTo(models.Airport, { as: 'departureAirport', foreignKey: 'departure_airport_id' })
            Flight.belongsTo(models.Airport, { as: 'arrivalAirport', foreignKey: 'arrival_airport_id' })
            Flight.hasMany(models.Ticket, { foreignKey: 'flight_id' })
            Flight.belongsTo(models.Airline, { as: 'airline', foreignKey: 'airline_id' })
        }
    }
    Flight.init({
        number: DataTypes.STRING,
        departure_airport_id: DataTypes.INTEGER,
        arrival_airport_id: DataTypes.INTEGER,
        departure_time: DataTypes.DATE,
        arrival_time: DataTypes.DATE,
        price: DataTypes.INTEGER,
        seat_capcity: DataTypes.INTEGER,
        class_name: DataTypes.STRING,
        airline_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Flight',
    })
    return Flight
}