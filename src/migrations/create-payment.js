'use strict'
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Payments', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            payment_date: {
                type: Sequelize.DATE
            },
            amount: {
                type: Sequelize.INTEGER
            },
            payment_method: {
                type: Sequelize.STRING
            },
            invoice_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Invoices',
                    key: 'id'
                }
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
        await queryInterface.dropTable('Payments')
    }
}