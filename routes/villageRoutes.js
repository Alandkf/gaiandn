const express = require('express');
const router = express.Router();
const villageController = require('../controllers/villageController');

router.get('/', villageController.index);
router.get('/:id/show', villageController.show);
router.get('/create', villageController.create);
router.post('/store', villageController.store);
router.get('/:id/edit', villageController.edit);
router.post('/:id/update', villageController.update);
// router.post('/:id/delete', villageController.delete);

module.exports = router;
