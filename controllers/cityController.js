const { Cities } = require('../models');
const { Op } = require('sequelize');

exports.index = async (req, res) => {
     const findKey = req.query.findKey || '';
    const cities = await Cities.findAll({
        where: {
            [Op.and]: [
                {
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
                },
                {
                    deletedAt: {
                        [Op.is]: null
                    }
                }
            ]
        }
    });
    res.render('cities/index', { cities, findKey: findKey });
};

exports.show = async (req, res) => {
    const city = await Cities.findByPk(req.params.id);
    res.render('cities/show', { city });
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
    await Cities.update({ deletedAt: new Date() }, { where: { id: req.params.id } });
    res.redirect('/cities');
};

exports.all = async (req, res) => {
    const cities = await Cities.findAll();
    res.json(cities);
}
