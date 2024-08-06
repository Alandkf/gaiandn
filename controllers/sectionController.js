const { Sections } = require('../models');
const { Op } = require('sequelize');

exports.index = async (req, res) => {
    const findKey = req.query.findKey || '';
    const sections = await Sections.findAll({
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
                    deletedAt: null
                }
            ]
        }
    });
    res.render('sections/index', { sections, findKey });
    // // const parse = JSON.parse(JSON.stringify(sections));
    // // const stringify = (JSON.stringify(sections));
    // res.json(sections || []);
};

exports.show = async (req, res) => {
    const section = await Sections.findByPk(req.params.id);
    res.render('sections/show', { section });
};

exports.create = (req, res) => {
    const errorMSG = req.query.error || "";
    const duplicatedName = req.query.duplicatedName || "";
    res.render('sections/create', { errorMSG, duplicatedName });
};

exports.store = async (req, res) => {
    try {
        await Sections.create(req.body);
        res.redirect('/sections');
    } catch (error) {
        let errorMSG = "Internal server error";
        if (error.name === 'SequelizeUniqueConstraintError') {
            // const sectionID = error.errors[0].value;
            let duplicatedName = req.body.name
            errorMSG = "duplicated";
            console.log(errorMSG);
            console.log('inputed:', duplicatedName);
            res.redirect(`/sections/create?error=${encodeURIComponent(errorMSG)}&duplicatedName=${encodeURIComponent(duplicatedName)}`);
        } else {
            console.error(error);
        }
    }
};


exports.edit = async (req, res) => {
    const section = await Sections.findByPk(req.params.id);
    res.render('sections/edit', { section });
};

exports.update = async (req, res) => {
    try {
        const result = await Sections.update(req.body, { where: { id: req.params.id } });
        if (result[0] === 0) {
            return res.status(404).json({ error: 'Section not found' });
        }
        res.redirect('/sections');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.delete = async (req, res) => {
    try {
        const result = await Sections.update({ deletedAt: new Date() }, { where: { id: req.params.id } });
        if (result[0] === 0) {
            return res.status(404).json({ error: 'Section not found' });
        }
        res.redirect('/sections');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.recovery = async(req, res) => {
    try {
        const result = await Sections.update({ deletedAt: null }, { where: { name: req.params.duplicatedName } });
        if (result[0] === 0) {
            return res.status(404).json({ error: 'Section not found' });
        }
        res.redirect('/sections');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
 };


exports.all = async (req, res) => {
    const sections = await Sections.findAll();
    res.json(sections);
}

