const express = require('express');
const router = express.Router();
const sectionController = require('../controllers/sectionController');

router.get('/', sectionController.index);
router.get('/create', sectionController.create);
router.post('/', sectionController.store);
router.get('/:id/edit', sectionController.edit);
router.post('/:id', sectionController.update);
router.post('/:id/delete', sectionController.delete);

module.exports = router;
