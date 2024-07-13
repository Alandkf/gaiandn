const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Drivers = require('./Drivers');

const Cities = require('./Cities');
const Employees = require('./Employees')(sequelize, DataTypes);
const Sections = require('./Sections')(sequelize, DataTypes);
const Villages = require('./Villages')(sequelize, DataTypes);

// Define relationships
Sections.hasMany(Employees, { foreignKey: 'sectionId' });
Employees.belongsTo(Sections, { foreignKey: 'sectionId' });

Cities.hasMany(Villages, { foreignKey: 'cityId' });
Villages.belongsTo(Cities, { foreignKey: 'cityId' });

Cities.hasMany(Drivers, { foreignKey: 'cityId' });
Drivers.belongsTo(Cities, { foreignKey: 'cityId' });

module.exports = {
    sequelize,
    Cities,
    Employees,
    Sections,
    Villages,
    Drivers,
};
