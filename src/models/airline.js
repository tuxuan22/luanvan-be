'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Airline extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Airline.hasMany(models.Flight, { foreignKey: 'airline_id' })

        }
    }
    Airline.init({
        code: DataTypes.STRING,
        name: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Airline',
    })
    return Airline
}