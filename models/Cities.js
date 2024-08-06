const sequelize = require('../config/db');
const Sequelize = require('sequelize');

const Cities = sequelize.define('Cities', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    status: {
        type: Sequelize.ENUM('active', 'inactive'),
        allowNull: false,
        defaultValue: 'active',
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    deletedAt: {
        type: Sequelize.DATE,
    },
}, {
    timestamps: true,
});

module.exports = Cities;
