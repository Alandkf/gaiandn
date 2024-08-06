const express = require('express');
const router = express.Router();
const sectionController = require('../controllers/sectionController');

//display
router.get('/', sectionController.index);
router.get('/:id/show', sectionController.show);
// create and store
router.get('/create', sectionController.create);
router.post('/store', sectionController.store);
// update and delete
router.get('/:id/edit', sectionController.edit);
router.patch('/:id/update', sectionController.update);
//delete and recovery
router.delete('/:id/delete', sectionController.delete);
router.patch('/:duplicatedName/recovery', sectionController.recovery);
router.get('/all',sectionController.all)

module.exports = router;
