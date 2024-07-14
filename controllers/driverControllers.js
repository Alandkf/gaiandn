const { Drivers, Cities } = require('../models');

exports.index = async (req, res) => {
    const drivers = await Drivers.findAll({ include: Cities });
    res.render('drivers/index', { drivers: drivers });
};

exports.show = async (req, res) => {
    const driver = await Drivers.findByPk(req.params.id, { include: Cities });
    res.render('drivers/show', { driver });
};

exports.create = async (req, res) => {
    const cities = await Cities.findAll();
    res.render('drivers/create', { cities });
};

exports.store = async (req, res) => {
    await Drivers.create(req.body);
    res.redirect('/drivers');
};

exports.edit = async (req, res) => {
    console.log("running edit file \n");
    const driver = await Drivers.findByPk(req.params.id);
    const cities = await Cities.findAll();
    res.render('drivers/edit', { driver, cities });
};

exports.update = async (req, res) => {
    await Drivers.update(req.body, { where: { id: req.params.id } });
    res.redirect('/drivers');
};

// exports.delete = async (req, res) => {
//     await Drivers.destroy({ where: { id: req.params.id } });
//     res.redirect('/drivers');
// };
