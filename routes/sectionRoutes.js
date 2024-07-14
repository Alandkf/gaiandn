const express = require('express');
const router = express.Router();
const sectionController = require('../controllers/sectionController');

router.get('/', sectionController.index);
router.get('/:id/show', sectionController.show);
router.get('/create', sectionController.create);
router.post('/store', sectionController.store);
router.get('/:id/edit', sectionController.edit);
router.post('/:id/update', sectionController.update);
// router.post('/:id/delete', sectionController.delete);

module.exports = router;
