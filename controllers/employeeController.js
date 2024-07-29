const { Employees, Sections } = require('../models');
const { Op } = require('sequelize');
exports.index = async (req, res) => {
    const findKey = req.query.findKey || '';
    const employees = await Employees.findAll({ include: Sections,where: {
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
    res.render('employees/index', { employees, findKey: findKey });
};

exports.show = async (req, res) => {
    const employee = await Employees.findByPk(req.params.id, { include: Sections });
    res.render('employees/show', { employee });
};

exports.create = async (req, res) => {
    const sections = await Sections.findAll();
    res.render('employees/create', { sections });
};

exports.store = async (req, res) => {
    await Employees.create(req.body);
    res.redirect('/employees');
};

exports.edit = async (req, res) => {
    const employee = await Employees.findByPk(req.params.id);
    const sections = await Sections.findAll();
    res.render('employees/edit', { employee, sections });
};

exports.update = async (req, res) => {
    await Employees.update(req.body, { where: { id: req.params.id } });
    res.redirect('/employees');
};

// exports.delete = async (req, res) => {
//     await Employees.destroy({ where: { id: req.params.id } });
//     res.redirect('/employees');
// };
