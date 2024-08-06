const { Drivers, Cities } = require('../models');
const { Op } = require('sequelize');
exports.index = async (req, res) => {
    const findKey = req.query.findKey || '';
    const drivers = await Drivers.findAll({ 
        include: Cities,
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
    res.render('drivers/index', { drivers, findKey: findKey });
};

exports.show = async (req, res) => {
    const driver = await Drivers.findByPk(req.params.id, { include: Cities });
    res.render('drivers/show', { driver });
};

exports.create = async (req, res) => {
    const cities = await Cities.findAll({where:{deletedAt: null}});
    res.render('drivers/create', { cities });
};

exports.store = async (req, res) => {
    await Drivers.create(req.body);
    res.redirect('/drivers');
};

exports.edit = async (req, res) => {
    console.log("running edit file \n");
    const driver = await Drivers.findByPk(req.params.id);
    const cities = await Cities.findAll({where:{deletedAt: null}})
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
exports.delete = async (req, res) => {
    await Drivers.update({ deletedAt: new Date() }, { where: { id: req.params.id } });
    res.redirect('/drivers');
    // res.send("deleting")
};

exports.all = async (req, res) => {
    const drivers = await Drivers.findAll();
    res.json(drivers || []);
}