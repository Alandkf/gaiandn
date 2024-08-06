const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const Sections = sequelize.define('Sections', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        note: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        status: {
            type: DataTypes.ENUM('active', 'inactive'),
            allowNull: false,
            defaultValue: 'active',
        },
        deletedAt: {
        type: Sequelize.DATE
    }
    }, {
        timestamps: true,
    });

    return Sections;
};
