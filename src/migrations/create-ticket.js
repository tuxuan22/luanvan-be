'use strict'
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Tickets', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            flight_id: {
                type: Sequelize.INTEGER,
                // references: {
                //     model: 'Flights',
                //     key: 'id'
                // }
            },
            seat_number: {
                type: Sequelize.INTEGER
            },
            price: {
                type: Sequelize.FLOAT
            },

            booking_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Bookings',
                    key: 'id'
                }
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
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Tickets')
    }
}