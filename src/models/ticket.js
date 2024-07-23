'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Ticket extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Ticket.belongsTo(models.Booking, { foreignKey: 'booking_id' })
            Ticket.belongsTo(models.Flight, { foreignKey: 'flight_id' })
        }
    }
    Ticket.init({
        flight_id: DataTypes.INTEGER,
        seat_number: DataTypes.INTEGER,
        price: DataTypes.FLOAT,

        booking_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Ticket',
    })
    return Ticket
}