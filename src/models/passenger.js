'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Passenger extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Passenger.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
        }
    }
    Passenger.init({
        last_name: DataTypes.STRING,
        first_name: DataTypes.STRING,
        dob: DataTypes.DATE,
        nationality: DataTypes.STRING,
        user_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Passenger',
    })
    return Passenger
}