'use strict'

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Tests', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,


            },
            age: {
                type: Sequelize.INTEGER
            },
            address: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        })

        await queryInterface.bulkInsert('Tests', [
            {
                name: 'abc',
                age: 22,
                address: '123 zxc',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'acs',
                age: 23,
                address: '456 vbn',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'abd',
                age: 24,
                address: '789 mnp',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'afe',
                age: 25,
                address: 'qwe rty',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'bbb',
                age: 19,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ])
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Tests', null, {})
    }
}