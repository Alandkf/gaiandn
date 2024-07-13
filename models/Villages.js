module.exports = (sequelize, DataTypes) => {
    const Villages = sequelize.define('Villages', {
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
        status: {
            type: DataTypes.ENUM('active', 'inactive'),
            allowNull: false,
            defaultValue: 'active',
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        cityId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Cities',
                key: 'id',
            },
            allowNull: false,
        }
    }, {
        timestamps: true,
    });

    return Villages;
};
