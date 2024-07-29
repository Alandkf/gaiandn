const { Sections } = require('../models');
const { Op } = require('sequelize');

exports.index = async (req, res) => {
    const findKey = req.query.findKey || '';
    const sections = await Sections.findAll({
        where: {
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
        }
    });
    res.render('sections/index', { sections, findKey });
};

exports.show = async (req, res) => {
    const section = await Sections.findByPk(req.params.id);
    res.render('sections/show', { section });
};

exports.create = (req, res) => {
    res.render('sections/create');
};

exports.store = async (req, res) => {
    await Sections.create(req.body);
    res.redirect('/sections');
};

exports.edit = async (req, res) => {
    const section = await Sections.findByPk(req.params.id);
    res.render('sections/edit', { section });
};

exports.update = async (req, res) => {
    await Sections.update(req.body, { where: { id: req.params.id } });
    res.redirect('/sections');
};

// exports.delete = async (req, res) => {
//     await Sections.destroy({ where: { id: req.params.id } });
//     res.redirect('/sections');
// };
