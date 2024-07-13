module.exports = (sequelize, DataTypes) => {
    const Employees = sequelize.define('Employees', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        salary: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        jobType: {
            type: DataTypes.ENUM('employee', 'manager'),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
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
        sectionId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Sections',
                key: 'id',
            },
            allowNull: false,
        }
    });

    return Employees;
};
