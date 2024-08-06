const Sequelize = require('sequelize');

const sequelize = require('../config/db');


    const Drivers = sequelize.define('Drivers', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        phoneNumber: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        vehicleType: {
            type: Sequelize.ENUM('motor', 'car', 'truck'),
            allowNull: false,
        },
        vehicleId: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        cityId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'Cities',
                key: 'id',
            },
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            allowNull: false,
            defaultValue: 'active',
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        price: {
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        deletedAt: {
        type: Sequelize.DATE
        // defaultValue: Sequelize.NOW,
    }
    }, {
        timestamps: true,
    });

    // Define associations
    // Drivers.associate = function(models) {
    //     Drivers.belongsTo(models.Cities, {
    //         foreignKey: 'cityId',
    //         as: 'City',
    //     });
    // };

    module.exports = Drivers;
