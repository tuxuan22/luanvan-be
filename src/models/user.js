'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Role, { foreignKey: 'role_id' })
      User.hasMany(models.Booking, { foreignKey: 'booking_id' })
      User.hasMany(models.Passenger, { foreignKey: 'passenger_id' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    role_id: DataTypes.INTEGER,
    passenger_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  })
  return User
}