'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Booking extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Booking.belongsTo(models.User, { foreignKey: 'user_id' })
            Booking.hasMany(models.Ticket, { foreignKey: 'booking_id' })
            Booking.hasMany(models.Invoice, { foreignKey: 'booking_id' })
            Booking.hasMany(models.Payment, { foreignKey: 'booking_id' })
        }
    }
    Booking.init({
        booking_date: DataTypes.DATE,
        user_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Booking',
    })
    return Booking
}
