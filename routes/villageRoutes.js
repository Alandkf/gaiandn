const express = require('express');
const router = express.Router();
const villageController = require('../controllers/villageController');

router.get('/', villageController.index);
router.get('/create', villageController.create);
router.post('/', villageController.store);
router.get('/:id/edit', villageController.edit);
router.post('/:id', villageController.update);
router.post('/:id/delete', villageController.delete);

module.exports = router;
