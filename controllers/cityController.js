const { Cities } = require('../models');

exports.index = async (req, res) => {
    const cities = await Cities.findAll();
    res.render('cities/index', { cities });
};

exports.create = (req, res) => {
    res.render('cities/create');
};

exports.store = async (req, res) => {
    await Cities.create(req.body);
    res.redirect('/cities');
};

exports.edit = async (req, res) => {
    const city = await Cities.findByPk(req.params.id);
    res.render('cities/edit', { city });
};

exports.update = async (req, res) => {
    await Cities.update(req.body, { where: { id: req.params.id } });
    res.redirect('/cities');
};

exports.delete = async (req, res) => {
    await Cities.destroy({ where: { id: req.params.id } });
    res.redirect('/cities');
};
