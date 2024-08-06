const express = require('express');
const router = express.Router();
const driversController = require('../controllers/driverControllers');

router.get('/', driversController.index);
router.get('/:id/show', driversController.show);
router.get('/create', driversController.create);
router.post('/store', driversController.store);
router.get('/:id/edit', driversController.edit);
router.patch('/:id/update', driversController.update);
router.delete('/:id/delete', driversController.delete);
// router.get('/all', driversController.all);

module.exports = router;
