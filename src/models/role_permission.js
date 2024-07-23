'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class RolePermission extends Model {
        static associate(models) {
            // associations can be defined here
        }
    }
    RolePermission.init({
        role_id: DataTypes.INTEGER,
        permission_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'RolePermission',
    })
    return RolePermission
}
