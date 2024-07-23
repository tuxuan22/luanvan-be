'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Invoice extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Invoice.belongsTo(models.Booking, { foreignKey: 'booking_id' })
            Invoice.belongsTo(models.Flight, { foreignKey: 'flight_id' })
        }
    }
    Invoice.init({
        date: DataTypes.DATE,
        total_amount: DataTypes.FLOAT,
        booking_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Invoice',
    })
    return Invoice
}