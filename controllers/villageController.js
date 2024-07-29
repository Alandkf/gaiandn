const { Villages, Cities } = require('../models');
const { Op } = require('sequelize');

exports.index = async (req, res) => {
    const findKey = req.query.findKey || '';
    const villages = await Villages.findAll({ include: Cities,where: {
            [Op.or]: [
                {
                    name: {
                        [Op.like]: `%${findKey}%`
                    }
                },
                {
                    id: {
                        [Op.like]: `%${findKey}%`
                    }
                }
            ]
        } });
    res.render('villages/index', { villages,findKey });
};

exports.show = async (req, res) => {
    const village = await Villages.findByPk(req.params.id, { include: Cities });
    res.render('villages/show', { village });
};

exports.create = async (req, res) => {
    const cities = await Cities.findAll();
    console.log("here the values that goes with the cities");
    // console.log(cities);
    res.render('villages/create',{ cities });
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
