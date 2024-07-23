'use strict'
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Flights', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            number: {
                type: Sequelize.STRING
            },
            departure_airport_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Airports',
                    key: 'id'
                }
            },
            arrival_airport_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Airports',
                    key: 'id'
                }
            },
            departure_time: {
                type: Sequelize.DATE
            },
            arrival_time: {
                type: Sequelize.DATE
            },
            price: {
                type: Sequelize.INTEGER
            },
            seat_capcity: {
                type: Sequelize.INTEGER
            },
            class_name: {
                type: Sequelize.STRING
            },
            airline_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Airlines',
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
        await queryInterface.dropTable('Flights')
    }
}

