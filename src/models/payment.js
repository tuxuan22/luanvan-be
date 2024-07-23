'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Payment extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Payment.belongsTo(models.Invoice, { foreignKey: 'invoice_id' })
            Payment.belongsTo(models.Booking, { foreignKey: 'booking_id' })
        }
    }
    Payment.init({
        payment_date: DataTypes.DATE,
        amount: DataTypes.INTEGER,
        payment_method: DataTypes.STRING,
        invoice_id: DataTypes.INTEGER,
        booking_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Payment',
    })
    return Payment
}