'use strict'
const {
    Model
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Test extends Model {
        static associates(models) {

        }

    }
    Test.init({
        name: DataTypes.STRING,
        age: DataTypes.INTEGER,
        address: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Test',
    })
    return Test
}