const express = require('express');
const router = express.Router();
const villageController = require('../controllers/villageController');

router.get('/', villageController.index);
router.get('/:id/show', villageController.show);
router.get('/create', villageController.create);
router.post('/store', villageController.store);
router.get('/:id/edit', villageController.edit);
router.patch('/:id/update', villageController.update);
router.delete('/:id/delete', villageController.delete);
// router.get('/all', villageController.all);

module.exports = router;
