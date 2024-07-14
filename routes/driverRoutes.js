const express = require('express');
const router = express.Router();
const driversController = require('../controllers/driverControllers');

router.get('/', driversController.index);
router.get('/:id/show', driversController.show);
router.get('/create', driversController.create);
router.post('/store', driversController.store);
router.get('/:id/edit', driversController.edit);
router.post('/:id/update', driversController.update);
// router.post('/:id/delete', driversController.delete);

module.exports = router;
