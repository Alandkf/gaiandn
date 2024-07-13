const { Villages, Cities } = require('../models');

exports.index = async (req, res) => {
    const villages = await Villages.findAll({ include: Cities });
    res.render('villages/index', { villages });
};

exports.create = async (req, res) => {
    const cities = await Cities.findAll();
    res.render('villages/create', { cities });
};

exports.store = async (req, res) => {
    await Villages.create(req.body);
    res.redirect('/villages');
};

exports.edit = async (req, res) => {
    const village = await Villages.findByPk(req.params.id);
    const cities = await Cities.findAll();
    res.render('villages/edit', { village, cities });
};

exports.update = async (req, res) => {
    await Villages.update(req.body, { where: { id: req.params.id } });
    res.redirect('/villages');
};

exports.delete = async (req, res) => {
    await Villages.destroy({ where: { id: req.params.id } });
    res.redirect('/villages');
};
